import Square from "../components/Square";
import Link from "next/link";
import Image from "next/image";
import radial from "@/public/Rectangle14.svg";

const Footer = () => {
  const squaresArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <footer id="footer" className="w-full  h-fit pb-5 xl:pb-20 px-5 xl:px-0">
      <div className="w-full xl:w-[1200px]  mx-auto ">
        <div className="relative w-full h-full ">
          <div className="absolute top-0 left-0 z-50 mix-blend-screen ">
            <Image src={radial} alt="radial" />
          </div>
          <div className="border-b md:border-b-0 border-brand-stroke-dark-gray ">
            <Square numberOfSquares={squaresArray} gridPosition="bottom" />
          </div>
        </div>
        <div className="w-full h-[237px] flex  justify-start items-end pl-10 md:pl-14 lg:pl-20  pb-12 bg-black rounded-b-2xl">
          <ul className="flex flex-col lg:flex-row justify-between lg:w-[450px] h-[130px] lg:h-fit ">
            <li className="text-white">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="text-white">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="text-white">
              <Link href={"/privacy"}>Privacy Policy</Link>
            </li>
            <li className="text-white">
              <Link href={"/terms"}>Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
