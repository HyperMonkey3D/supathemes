import Logo from "../components/Logo";
import Square from "../components/Square";
import Link from "next/link";
const Hero = () => {
  const squaresArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="w-full pb-10" id="supa">
      <div className="w-full xl:w-[1200px]  h-fit overflow-clip relative mx-auto xl:rounded-2xl -z-10 ">
        <Square numberOfSquares={squaresArray} gridPosition="top" />
        <Logo />
        <div className="min-h-[200px] w-full px-10 pt-14 pb-6 flex justify-center items-start ">
          <h1 className="text-white text-5xl ">
            Beautiful and Practical <span className="text-purple">Framer</span> Themes
          </h1>
        </div>
      </div>
      <div className="w-full xl:w-[1200px] mx-auto flex justify-center  pt-5 px-10 ">
        <div className="w-[275px] h-[72px] bg-brand-purple border-brand-purple rounded-full flex justify-center items-center mt-8  ">
          <Link href={"/store"} className="text-white text-3xl hover:text-purple-400 delay-150 duration-300 ease-in-out">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
