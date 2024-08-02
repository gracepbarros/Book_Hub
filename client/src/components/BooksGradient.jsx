import React, { useState, useEffect } from "react";
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
      const response = await axios.get(`http://localhost:3000/shelf/${category}?userID=${user.userID}`);

      console.log(`response: ${category}`, response.data);
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
      axios.get(`http://localhost:3000/bookList/${id}`)
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
      fetchBooks();
    }
  }, [bookIdList]);


  return (
    <div className="w-full mx-auto flex flex-col">
      <div className={`min-h-[16rem] ${backgroundColor} flex items-center w-full `}>
        <div className="min-h-[16rem] max-w-[6rem] flex flex-col justify-center relative ">
            <h1 className={`min-h-[4rem] w-[16rem] text-center text-3xl font-extrabold ${textColor} -rotate-90 textstroke-w absolute -left-[5rem]`}> 
              {category}
            </h1>
        </div>
        <div className="flex-1 flex items-center left-[4rem] relative ">
          { books.length === 0 ? (
            <h1 className={`text-2xl font-extrabold textwhite irishgrover justify-center w-[80%]`}> 
            No books added to the <em className="uppercase"> {category} </em> category.
            </h1>
          ) : (
          <div className={`grid grid-rows-1 grid-cols-${columns} gap-10 mx-5 my-3`}>
            {books.map((book) => (
              <BookDisplay key={book.googleID} book={book} />
            ))}
            <span className="material-symbols-outlined px-2 absolute -right-24">
              arrow_forward_ios
            </span>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksGradient;
