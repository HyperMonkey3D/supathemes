import Square from "../components/Square";
import Image from "next/image";
import radial from "@/public/Rectangle14.svg";

const Footer = () => {
  const squaresArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <footer className="w-full xl:w-[1200px] h-fit bg-brand-dark-gray ">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 z-50 mix-blend-screen">
          <Image src={radial} alt="radial" />
        </div>
        <Square numberOfSquares={squaresArray} gridPosition="bottom" />
      </div>
      <div className="w-full h-[237px] bg-black"></div>
    </footer>
  );
};

export default Footer;
