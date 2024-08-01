import React, { useState } from "react";
import hppicture from "../images/hpbook.jpg";
import { Menu, Transition } from "@headlessui/react";
import { MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const BookCard = () => {
  const [currentMood, setCurrentMood] = useState("Add to Shelf");
  const [buttonColor, setButtonColor] = useState("#f8f9fa");

  const handleSelect = (mood, color) => {
    setCurrentMood(mood);
    setButtonColor(color);
  };

  return (
    <div className="bookcard">
      <img className="chunk1" src={hppicture} alt="Book Cover" />
      <div className="chunk2 irishgrover">
        <p className="flex justify-center items-center">
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
                      className={`${
                        active ? "bgbeige" : ""
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      onClick={() => handleSelect("Unread", "var(--beige)")}
                    >
                      Unread
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bgturquoise" : ""
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
                      className={`${
                        active ? "bgorange" : ""
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      onClick={() => handleSelect("Read", "var(--orange)")}
                    >
                      Read
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bgbrown" : ""
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
        <p className="irishgrover textorange text-2xl">A title name</p>
        <p>Author(s): Name</p>
        <p>Description:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam
          dignissimos aliquam magni! Distinctio doloribus facere hic, maxime
          possimus placeat laudantium dolorum assumenda, cumque, excepturi quo
          necessitatibus omnis soluta doloremque.
        </p>
      </div>
    </div>
  );
};

export default BookCard;
