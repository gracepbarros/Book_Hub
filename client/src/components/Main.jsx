const Main = () => {
  return (
    <main className="flex justify-end items-center mr-2">
      <h2 className="textstrokeh2 text-3xl mt-0 text-center">
        Explore more titles
      </h2>
      <div className="flex items-center ml-2 pl-1 mt-1 bg-gray-300 rounded-lg">
        <input
          className="bg-gray-300 pl-8"
          type="text"
          placeholder="Search for a book..."
        />
        <span className="material-symbols-outlined pl-2">search</span>
      </div>
    </main>
  );
};

export default Main;
