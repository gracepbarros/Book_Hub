const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full h-16 mx-auto text-center bg-black text-turquoise-500  flex justify-center items-center text-lg border-y-4 border-orange-500">
      <p className="text-orange-500">
        Copyright &copy; {year}:{" "}
        <a
          href="https://github.com/gracepbarros"
          target="_blank"
          className="underline"
        >
          Grace Barros
        </a>
        ,{" "}
        <a
          href="https://github.com/Luiz161001"
          target="_blank"
          className="underline"
        >
          Luiz Eduardo
        </a>
        ,{" "}
        <a
          href="https://github.com/PieroFriedrich"
          target="_blank"
          className="underline"
        >
          Piero Friedrich
        </a>
      </p>
    </div>
  );
};

export default Footer;
