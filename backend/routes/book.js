import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import redis from "redis";

dotenv.config();

const router = express.Router()
const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.GOOGLE_API_KEY;

function formatBookData(rawitem){
    const { id, volumeInfo } = rawitem;
        
    const { 
        title, 
        authors, 
        description,
        pageCount, 
        imageLinks, } = volumeInfo;

    return {
        googleId: id,
        title,
        authors,
        description,
        pageCount,
        cover: imageLinks ? imageLinks.thumbnail : undefined, };
}

let redisClient;

(async () => {
  redisClient = redis.createClient({
    url: 'redis://redis:6379',
  });
  // redisClient = redis.createClient();

  try{
    await redisClient.connect();
  }
  catch(err){
    console.error("Not possible to connect to redis: ", err);
  }
})();

async function isBookListCached(req, res, next){
  const query = req.query.q || 'Harry Potter';
  const page = req.query.page || 1;

  let books;

  try{
    const cacheData = await redisClient.get(`${query}${page}`);
    if(cacheData){
      books = JSON.parse(cacheData);
      res.send({totalItems: books.length, items: books})
    }
    else{
      next();
    }
  }
  catch(err){
    console.error("Not possible to process data in cache: ", err);
    res.status(404);
  }
} 

// Book search - get a list of books
router.get("/", isBookListCached, async (req, res) => {
    try {
      const q = req.query.q || 'Harry Potter';
      const index = req.query.startIndex ;
      const maxResults = req.query.maxResults ;

      const response = await axios.get(`${API_URL}?q=${q}&startIndex=${index}&maxResults=${maxResults}&key=${API_KEY}`);
      const { items, totalItems } = response.data;
        
      if (totalItems == 0) {
        return res.status(404).send('No books found');
      }

      const formattedItems = items.map((item) => {
        return {
            ...formatBookData(item),
        };
      });

      // await redisClient.set(`${query}${page}`, JSON.stringify(formattedItems));

      res.json({totalItems, items: formattedItems});
        
    } catch (error) {
      res.status(500).send('Error on API searching');
      console.error('Failed to Fetch books with error: ', error);
    }

});

// Book details - get a book by ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const response = await axios.get(`${API_URL}/${id}?key=${API_KEY}`);
      res.json(formatBookData(response.data));
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch book details', message: error.message });
    }
  });

export default router;