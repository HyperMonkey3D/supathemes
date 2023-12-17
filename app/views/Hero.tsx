import Logo from "../components/Logo";
import Square from "../components/Square";
import Link from "next/link";
const Hero = () => {
  const squaresArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="w-full xl:w-[1200px]  h-fit overflow-clip relative bg-brand-dark-gray">
      <Square numberOfSquares={squaresArray} gridPosition="top" />
      <Logo />
      <div className="min-h-[300px] w-full px-10 py-10 lg:px-[140px] flex flex-col justify-between">
        <h1 className="text-white text-5xl">
          Beautiful and Practical Website Themes Built with Framer
        </h1>
        <div className="bg-brand-purple w-[275px] h-[72px] border border-brand-purple rounded-lg flex justify-center items-center mt-8">
          <Link href={"/"} className="text-white text-3xl">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// xl:-translate-x-36
