import Square from "../components/Square";
import Link from "next/link";
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
        <div className="border-y md:border-t md:border-b-0 border-brand-stroke-dark-gray">
          <Square numberOfSquares={squaresArray} gridPosition="bottom" />
        </div>
      </div>
      <div className="w-full h-[237px] flex  justify-start items-end pl-10 md:pl-14 lg:pl-20  pb-12 bg-black ">
        <ul className="flex flex-col lg:flex-row justify-between lg:w-[450px] h-[130px] lg:h-fit ">
          <li className="text-white">
            <Link href={"/"}>About</Link>
          </li>
          <li className="text-white">
            <Link href={"/"}>Contact</Link>
          </li>
          <li className="text-white">
            <Link href={"/"}>Privacy Policy</Link>
          </li>
          <li className="text-white">
            <Link href={"/"}>Terms of Service</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
