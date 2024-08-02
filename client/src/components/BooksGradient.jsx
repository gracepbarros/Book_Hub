import { AuthProvider } from "./../AuthContext";

const BooksGradient = ({color, category}) => {
  const backgroundColor = `bg${color}`;
  const textColor = `text${color}`;
  return (
    <div className="w-full mx-auto flex flex-col">
      <div className={`min-h-[16rem] ${backgroundColor} flex items-center w-full `}>
        <div className="min-h-[16rem] max-w-[6rem] flex flex-col justify-center relative ">
            <h1 className={`min-h-[4rem] w-[16rem] text-center text-3xl font-extrabold ${textColor} -rotate-90 textstroke-w absolute -left-[5rem]`}> 
              {category}
            </h1>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className={`text-2xl font-extrabold irishgrover`}> 
            No books added to the <em className="uppercase"> {category} </em> category.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BooksGradient;
