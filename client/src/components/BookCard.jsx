import React, { useState } from "react";
import hppicture from "../images/hpbook.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const BookCard = () => {
  const [currentMood, setCurrentMood] = useState("Add to Shelf");
  const [buttonColor, setButtonColor] = useState("#f8f9fa");

  const handleSelect = (mood, color, textColor) => {
    setCurrentMood(mood);
    setButtonColor(color);
  };

  return (
    <div className="bookcard">
      <img className="chunk1" src={hppicture} alt="Book Cover" />
      <div className="chunk2 irishgrover">
        <p>
          Add to{" "}
          <span className="material-symbols-outlined px-2 text-red-500">
            favorite
          </span>
        </p>

        <DropdownButton
          id="dropdown-basic-button"
          title={currentMood}
          variant="custom"
          style={{
            backgroundColor: buttonColor,
            color: "black",
            border: "none",
            padding: "0.5rem 1rem",
          }}
        >
          <Dropdown.Item
            onClick={() => handleSelect("Unread", "#f5f5dc")}
            className="bgbeige"
          >
            Unread
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Reading", "#40E0D0")}
            className="bgturquoise"
          >
            Reading
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Read", "#FFA500")}
            className="bgorange"
          >
            Read
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleSelect("Abandoned", "#8B4513")}
            className="bgbrown"
          >
            Abandoned
          </Dropdown.Item>
        </DropdownButton>
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
