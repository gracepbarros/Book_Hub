const Books = () => {
  return (
    <div className="books-container">
      <div className="books-row books-unread"></div>
      <div className="books-row books-reading"></div>
      <div className="books-row books-read"></div>
      <div className="books-row books-abandoned"></div>
    </div>
  );
};

export default Books;
