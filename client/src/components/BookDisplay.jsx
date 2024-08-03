import React, { useState } from "react";
import BookCard from "./BookCard";
import Modal from "./Modal";

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
      <div
        className="book-card mx-1 flex-col items-center content-between max-w-[130px]"
        onClick={openCard}
      >
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="max-h-[200px] w-auto mt-3"
        />
        <p className="irishgrover text-center self-end textwhite text-3x1 p-2 h-[80%]">
          {book.title}
        </p>
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
