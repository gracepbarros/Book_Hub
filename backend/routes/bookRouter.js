import express from "express";
import axios from "axios";
import dotenv from "dotenv";

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
        cover: imageLinks.thumbnail, };
}

// Book search - get a list of books
router.get("/", async (req, res) => {
    try {
      const query = req.query.q || 'Harry Potter';

      if (!query) {
        console.error('No query provided. Default search "Harry Potter" was used.');
      }
    
      const limit = req.query.limit || 18;
      const page = req.query.page || 1;
      const response = await axios.get(`${API_URL}?q=${query}&limit=${limit}&page=${page}&key=${API_KEY}`);
      console.log("Test of response: ",response.data.items)
      const { items, totalItems } = response.data;
        
      if (totalItems == 0) {
        return res.status(404).send('No books found');
      }

      const formattedItems = items.map((item) => {
        return {
            ...formatBookData(item),
        };
      });

      res.json(formattedItems);
        
    } catch (error) {
      console.error('Failed to Fetch books.');
      res.status(500).send('Error on API searching');
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