import React, { useState} from 'react';
import BookCard from './BookCard';
import Modal from './Modal';

const BookDisplay = ({ book }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openCard = () => {
        setIsModalOpen(true);
    };

    const closeCard = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="book-card bgbrown mx-1 flex-col items-center content-between" onClick={openCard}>
                <img src={book.cover} alt={`${book.title} cover`}  className='w-[100%]'/>
                <p className='irishgrover text-center self-end textbeige text-3x1 p-2 h-[80%]'>{book.title}</p>
            </div>
            {isModalOpen && (
                <Modal onClose={closeCard}>
                    <BookCard book={book} />
                </Modal>
            )}
        </>
    );
};

export default BookDisplay;
