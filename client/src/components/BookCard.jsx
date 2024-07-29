import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.cover} alt={`${book.title} cover`} />
            <h3>{book.title}</h3>
            <p>{book.authors.join(', ')}</p>
            <p>{book.pageCount} pages</p>
            <p>ISBN: {book.isbn10}</p>
        </div>
    );
};

export default BookCard;
