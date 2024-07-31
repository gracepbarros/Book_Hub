import React from 'react';

const BookDisplay = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.cover} alt={`${book.title} cover`} />
            <h3>{book.title}</h3>
        </div>
    );
};

export default BookDisplay;
