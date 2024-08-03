import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../AuthContext";
import BookDisplay from "./BookDisplay";
import axios from "axios";

const BooksGradient = ({color, category}) => {
  const backgroundColor = `bg${color}`;
  const textColor = `text${color}`;

  const { user } = useAuth();
  const [bookIdList, setbookIdList] = useState([]);
  const [books, setBooks] = useState([]);
  const [columns, setColumns] = useState(4);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const handleResize = () => {
    const width = window.innerWidth;
    let newColumns = Math.floor(width / 250);
    newColumns = Math.max(newColumns, 1);
    setColumns(newColumns);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchIds = async () => {
    try {
      const response = await axios.get(`http://44.202.24.229:3000/shelf/${category}?userID=${user.userID}`);

      // console.log(`response: ${category}`, response.data);
      if (response.status === 200 && response.data) {
        response.data.forEach((book) => {
          setbookIdList((prev) => [...prev, book.googleID]);
        });
      } else if (response.status === 404) {
        setbookIdList([]);
      }
    } catch (error) {
      console.error("Error fetching category: ", error);
    }
  }
  useEffect(() => {
    if (category) {
      fetchIds();
    }
  }, [category]);

  const fetchBooks = async () => {
    const uniqueBookIds = [...new Set(bookIdList)]; // Remove duplicates from bookIdList
    const fetchPromises = uniqueBookIds.map(id =>
      axios.get(`http://44.202.24.229:3000/bookList/${id}`)
        .then(response => {
          // console.log(`Successfully fetched book ${id}:`, response.data);
          return response.data;
        })
        .catch(error => {
          console.error(`Error fetching book id ${id}: `, error.response ? error.response.data : error.message);
          return null;
        })
    );
  
    try {
      const results = await Promise.all(fetchPromises);
      const validBooks = results.filter(book => book !== null);
      setBooks(prevBooks => {
        const newBooks = validBooks.filter(book => !prevBooks.some(prevBook => prevBook.id === book.id));
        return [...prevBooks, ...newBooks];
      });
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };

  useEffect(() => {
    if (bookIdList.length > 0) {
      console.log("Fetching books for IDs:", bookIdList);
      fetchBooks();
    } else {
      console.log("No book IDs to fetch");
      setBooks([]);
    }
  }, [bookIdList]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial scroll position
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full mx-auto flex flex-col">
      <div className={`min-h-[16rem] ${backgroundColor} flex items-center w-full relative`}>
        <div className="min-h-[16rem] max-w-[6rem] flex flex-col justify-center relative">
          <h1 className={`min-h-[4rem] w-[16rem] text-center text-3xl font-extrabold ${textColor} -rotate-90 textstroke-w absolute -left-[5rem]`}>
            {category}
          </h1>
        </div>
        <div className="flex-1 flex items-center left-[4rem] relative overflow-hidden "> 
          {showLeftArrow && (
            <button onClick={() => scroll('left')} className="absolute left-0 z-10 bg-white bg-opacity-50 p-2 rounded-full">
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {books.map((book) => (
              <div key={book.googleID} className="flex-shrink-0 mx-2">
                <BookDisplay book={book} />
              </div>
            ))}
          </div>
          {showRightArrow && (
            <button onClick={() => scroll('right')} className="absolute right-0 z-10 bg-white bg-opacity-50 p-2 rounded-full">
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksGradient;
