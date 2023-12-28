import grid from "@/public/dassh.svg";
import Image from "next/image";
import Link from "next/link";
import pageScreenshot from "@/public/bar.png";

const Themes = () => {
  return (
    <section className="w-full xl:w-[1200px]  h-fit ">
      <div className="bg-gradient-to-tr from-brand-purple-dark from-10% via-brand-purple-mid  to-brand-purple-light to-60% w-full h-[550px]  sm:h-[650px]  lg:h-[750px] xl:rounded-t-2xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 h-full relative">
          <div className=" w-full lg:w-[400px] h-fit lg:h-full flex flex-col justify-center items-start pl-8">
            <div className="my-8 w-[230px] sm:w-[330px] md:w-[430px] ">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium">
                The Themes for the Web
              </h2>
            </div>
            <div className=" w-[130px] h-[40px] md:w-[163px] lg:w-[183px] md:h-[50px] lg:h-[56px] border border-white rounded-2xl flex justify-center items-center">
              <Link href={"/"} className="text-white">Get Started</Link>
            </div>
          </div>

          <div className=" h-fit w-[380px] sm:w-[480px]  md:w-[580px]  lg:w-[680px] absolute bottom-0 right-0 ">
            <Image src={grid} alt="grid" />
          </div>
          <div className="absolute bottom-0 right-0 w-[330px] sm:w-[420px]  md:w-[500px] lg:w-[580px] ">
            <Image src={pageScreenshot} alt="page screenshot"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Themes;


