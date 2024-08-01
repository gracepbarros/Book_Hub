import React from 'react';

const BookDisplay = ({ book }) => {
    return (
        <div className="book-card bgbrown mx-1 flex-col items-center content-between">
            <img src={book.cover} alt={`${book.title} cover`}  className='w-[100%]'/>
            <p className='irishgrover text-center self-end textbeige text-3x1 p-2 h-[80%]'>{book.title}</p>
        </div>
    );
};

export default BookDisplay;
