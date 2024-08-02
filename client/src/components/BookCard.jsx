import React, { useState, useEffect } from "react";
import hppicture from "../images/hpbook.jpg";
import { Menu, Transition } from "@headlessui/react";
import { MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import axios from "axios";

const BookCard = ({ googleId, userId }) => {
  const [currentMood, setCurrentMood] = useState("Add to Shelf");
  const [buttonColor, setButtonColor] = useState("#f8f9fa");
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/bookList/${googleId}`
        );
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [googleId]);

  const handleSelect = (mood, color) => {
    setCurrentMood(mood);
    setButtonColor(color);

    const categoryMap = {
      Unread: 1,
      Reading: 2,
      Read: 3,
      Abandoned: 4,
    };

    handleShelfUpdate(categoryMap[mood], false);
  };

  const handleShelfUpdate = async (category, isFavorite) => {
    try {
      const response = await axios.post("/api/update-shelf", {
        googleId,
        userId,
        category,
        isFavorite,
      });

      if (response.status !== 200) {
        throw new Error("Failed to update shelf");
      }

      // Optionally, you can update the local state or show a success message
    } catch (error) {
      console.error("Error updating shelf:", error);
      // Optionally, show an error message to the user
    }
  };

  const removeHtmlTags = (html) => {
    if (!html) return "";
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bookcard flex flex-col md:flex-row w-full max-w-xs md:max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden max-h-[80vh] md:max-h-[600px] overflow-y-auto">
      <img
        className="chunk1"
        src={bookDetails.cover || hppicture}
        alt="Book Cover"
      />
      <div className="chunk2 irishgrover">
        <p
          className="flex justify-center items-center"
          onClick={() => handleShelfUpdate(0, true)}
        >
          Add to{" "}
          <span className="material-symbols-outlined px-2 text-red-500">
            favorite
          </span>
        </p>

        <Menu as="div" className="relative inline-block text-left">
          <MenuButton
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            style={{
              backgroundColor: buttonColor,
              color: "black",
            }}
          >
            {currentMood}
          </MenuButton>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`
                      bg-[var(--beige)] text-white
                      group flex rounded-md items-center w-full px-2 py-2 text-sm
                      ${active ? "opacity-80" : ""}
                    `}
                      onClick={() => handleSelect("Unread", "var(--beige)")}
                    >
                      Unread
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`
                      bg-[var(--turquoise)] text-white
                      group flex rounded-md items-center w-full px-2 py-2 text-sm
                      ${active ? "opacity-80" : ""}
                    `}
                      onClick={() =>
                        handleSelect("Reading", "var(--turquoise)")
                      }
                    >
                      Reading
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`
                       bg-[var(--orange)] text-white
                       group flex rounded-md items-center w-full px-2 py-2 text-sm
                       ${active ? "opacity-80" : ""}
                     `}
                      onClick={() => handleSelect("Read", "var(--orange)")}
                    >
                      Read
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`
                      bg-[var(--brown)] text-white
                      group flex rounded-md items-center w-full px-2 py-2 text-sm
                      ${active ? "opacity-80" : ""}
                    `}
                      onClick={() => handleSelect("Abandoned", "var(--brown)")}
                    >
                      Abandoned
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
      <div className="chunk3">
        <p className="irishgrover textorange text-2xl">{bookDetails.title}</p>
        <p>Author(s): {bookDetails.authors?.join(", ") || "Unknown"}</p>
        <p>Description:</p>
        <p className="text-justify">
          {removeHtmlTags(bookDetails.description) ||
            "No description available."}
        </p>
        {bookDetails.pageCount && <p>Pages: {bookDetails.pageCount}</p>}
      </div>
    </div>
  );
};

export default BookCard;
