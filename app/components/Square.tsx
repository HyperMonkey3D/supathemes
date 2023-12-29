import lines from "@/public/backgroundlines.svg";
import Image from "next/image";
import logo from "@/public/logo-white-1.svg";
import x from "@/public/x.svg";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";

interface Props {
  numberOfSquares: number[];
  gridPosition: string;
}

const Square = ({ numberOfSquares, gridPosition }: Props) => {
  const coloredSquare = (index: number) => {
    if (index === 0) {
      return (
        <div className="w-full h-full bg-gradient-to-bl from-brand-square-green "></div>
      );
    } else if (index === 3) {
      return (
        <div className="w-full h-full bg-gradient-to-bl from-brand-square-purple "></div>
      );
    } else if (index === 6) {
      return (
        <div className="w-full h-full bg-gradient-to-bl from-brand-square-dark-pink "></div>
      );
    } else {
      return <div className="w-full h-ful bg-brand-dark-gray "></div>;
    }
  };

  return (
    //gridposition top is in hero section
    //gridposition bottom in in footer
    <div className="min-h-[500px]  w-full xl:w-[1200px] grid grid-cols-2 md:grid-cols-6 grid-rows-4 md:grid-rows-2 gap-0.5 bg-brand-stroke-dark-gray relative ">
      {gridPosition === "top" &&
        numberOfSquares.map((item, index) => {
          return (
            <div
              className={
                index === 1 || index === 2 || index === 5 || index === 6
                  ? "w-full h-full  col-span-1 bg-black row-span-1 md:col-span-2"
                  : "w-full h-full bg-black"
              }
              key={index}
            >
              {coloredSquare(index)}
            </div>
          );
        })}
      {gridPosition === "bottom" &&
        numberOfSquares.map((item, index) => {
          return (
            <div
              className={
                index === 0 || index === 5
                  ? "w-full h-full  col-span-1 bg-black row-span-1 md:col-span-3"
                  : index === 1 || index === 4
                  ? "w-full h-full  col-span-1 bg-black row-span-1 md:col-span-2"
                  : "w-full h-full bg-black"
              }
              key={index}
            ></div>
          );
        })}
      {gridPosition === "bottom" && (
        <>
          <div className="absolute top-8 left-2 sm:top-3 sm:left-4 md:top-14 md:left-8 lg:top-16 lg:left-20 w-[100px] sm:w-[200px]  ">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="absolute right-5 bottom-10  md:right-10 flex justify-between w-[126px] md:w-[156px]  lg:w-[176px] z-50">
            <li className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]">
              <a href="https://twitter.com/" target="_blank">
                <Image src={x} alt="x" />
              </a>
            </li>
            <li className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]">
              <a href="https://www.facebook.com/" target="_blank">
                <Image src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]">
              <a href="https://www.instagram.com/" target="_blank">
                <Image src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Square;
