const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full h-16 mx-auto text-center bgturquoise flex justify-center items-center text-lg">
      <p className="textwhite text-bold">
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
