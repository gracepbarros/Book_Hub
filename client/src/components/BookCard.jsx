import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ book }) => {
  const { user } = useAuth();

  const [currentMood, setCurrentMood] = useState("Add to Shelf");
  const [buttonColor, setButtonColor] = useState("#f8f9fa");
  const [isFavorite, setIsFavorite] = useState(false);
  const [favText, setFavText] = useState("Add to ");

  useEffect(() => {
    if(isFavorite){
      setFavText("Remove from ")
    } else {
    setFavText("Add to ")
    };
  }, [isFavorite]);

  const fetchShelf = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/shelf?googleID=${book.googleId}&userID=${user.userID}`);
      
      if (response.status === 200 && response.data) {
        const { category, favorite } = response.data;

        const categoryMap = {
          1 : {name: "Unread", color: "var(--beige)"},
          2 : {name: "Reading", color : "var(--turquoise)"},
          3 : {name: "Read", color: "var(--orange)"},
          4 : {name: "Abandoned", color: "var(--brown)"},
        };

        if (category !== 0) {
          setCurrentMood(categoryMap[category].name);
          setButtonColor(categoryMap[category].color);
        }
        setIsFavorite(favorite);

        } else {
          console.log("No shelf data found or unexpected response format");
        }
    } catch (error) {
      console.error("Error fetching shelf: ", error);
    }
  };
  
  const moodToInt = (mood) => {

    const categoryMap = {
      Unread: 1,
      Reading: 2,
      Read: 3,
      Abandoned: 4,
    };

    return categoryMap[mood] ? categoryMap[mood] : 0;
  };

  const handleFavorite = () => {
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);
    handleShelfUpdate(moodToInt(currentMood), newStatus);
  };

  const handleSelect = (mood, color) => {
    setCurrentMood(mood);
    setButtonColor(color);

    handleShelfUpdate(moodToInt(currentMood), isFavorite);
  };

  const handleShelfUpdate = async (category, favorite) => {
    const body = {
      googleID: book.googleId,
      userID: user.userID,
      category,
      favorite,
    };

    try {
      const response = await axios.post("http://localhost:3000/shelf", body);

      if (response.status !== 200) {
        throw new Error("Failed to update shelf");
      }
    } catch (error) {
      console.error("Error updating shelf: ", error);
    }
  };

  const removeHtmlTags = (html) => {
    if (!html) return "";
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return(
      <div className="bookcard flex flex-col md:flex-row w-full max-w-xs md:max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden max-h-[80vh] md:max-h-[600px] overflow-y-auto">
        <img
          className="chunk1"
          src={book.cover || "https://via.placeholder.com/128x196"}
          alt="Book Cover"
        />
        <div className="chunk2 py-5 border-solid-black-2">
          <Link to="/login">
            <button className="mt-8 w-full bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"> 
              Log in to use shelf features
            </button>
          </Link>
        </div>
        <div className="chunk3 textbrown">
          <p className="irishgrover textorange text-2xl">{book.title}</p>
          <p><em className="textorange">Author(s):</em> {book.authors?.join(", ") || "Unknown"}</p>
          <p className="textorange">Description:</p>
          <p className="text-justify">
            {removeHtmlTags(book.description) ||
              "No description available."}
          </p>
          {book.pageCount && <p><em className="textorange">Page count:</em> {book.pageCount}</p>}
        </div>
      </div>
    ) 
  } else {
    useEffect(() => {
      fetchShelf();
    }, []);
  }
  return (
    <div className="bookcard flex flex-col md:flex-row w-full max-w-xs md:max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden max-h-[80vh] md:max-h-[600px] overflow-y-auto">
      <img
        className="chunk1"
        src={book.cover || "https://via.placeholder.com/128x196"}
        alt="Book Cover"
      />
      <div className="chunk2 irishgrover">
        <button
          className="flex justify-center items-center textwine pb-5"
          onClick={() => handleFavorite()}>
          {favText} {" "}
          <span className="material-symbols-outlined px-2">
            favorite
          </span>
        </button>

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
                      bg-[rgb(248, 249, 250)]
                      group flex rounded-md items-center w-full px-2 py-2 text-sm
                      ${active ? "opacity-80" : ""}
                    `}
                      onClick={() => handleSelect("Null", "rgb(248, 249, 250)")}
                    >
                      None
                    </button>
                  )}
                </MenuItem>
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
      <div className="chunk3 textbrown">
          <p className="irishgrover textorange text-2xl">{book.title}</p>
          <p><em className="textorange">Author(s):</em> {book.authors?.join(", ") || "Unknown"}</p>
          <p className="textorange">Description:</p>
          <p className="text-justify">
            {removeHtmlTags(book.description) ||
              "No description available."}
          </p>
          {book.pageCount && <p><em className="textorange">Page count:</em> {book.pageCount}</p>}
      </div>
    </div>
  ); 
};

export default BookCard;
