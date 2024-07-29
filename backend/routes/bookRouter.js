import express from "express";
import axios from "axios";

const router = express.Router()
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

router.get("/:search", async (req, res) => {
    const query = req.params.search;

    if (!query) {
        res.status(400).send('Missing query parameter');
    }
    console.log(query)

    //const limit = req.query.limit || 10;
      try {
       //const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=${limit}`);
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      const data = JSON.parse(response.data);
  
      if (data.numFound === 0) {
        return res.status(404).send('No books found');
      }
      console.log('Book Controller:');
      console.log(data);
      res.json(data);
        
    } catch (error) {
      console.error('Error on API searching:', error);
      res.status(500).send('Error on API searching');
    }

});


export default router;