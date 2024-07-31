import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookDisplay';
import SearchBar from './SearchBar';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('bridgerton');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/bookList?q=${searchQuery}`);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="book-list">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;
