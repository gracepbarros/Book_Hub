import React, { useState, useEffect } from "react";
import axios from "axios";
import BookDisplay from "./BookDisplay";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [columns, setColumns] = useState(6);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements["book-search"].value;
    setSearchQuery(query);
    setPage(1);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    let newColumns = Math.floor(width / 250);
    newColumns = Math.max(newColumns, 1); // Ensure at least one column
    setColumns(newColumns);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    console.log("Current page: ", page);
    const fetchBooks = async () => {
      try {
        const index = page == 1 ? 0 : (page - 1) * columns * 3;

        const response = await axios.get(
          `http://44.202.24.229:3000/bookList?q=${searchQuery}&startIndex=${index}&maxResults=${columns * 3}`
        );
        console.log("Response data.totalitems: ", response.data.totalItems);
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [searchQuery, page, columns]);

  return (
    <div>
      <form class="max-w-md mx-auto mb-9" onSubmit={handleSearch}>
        <label
          for="book-search"
          class="mb-2 text-sm font-medium bgorange sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="book-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            placeholder="Search for title, author, ISBN and more"
            required
            onKeyDown={e => {if(e.key==="Enter") handleSearch()}}
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bgorange hover:bgbrown font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div className={`grid grid-rows-3 grid-cols-${columns} gap-10 mx-5`}>
        {books.map((book) => (
          <BookDisplay key={book.googleId} book={book}/>
        ))}
      </div>

      <div className="flex justify-center py-5 ">
        <button
          onClick={handlePrevPage}
          className="mx-2 p-2 bgorange text-white rounded border-solid border-white border-2"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="mx-2 p-2 bgorange text-white rounded border-solid border-white border-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
