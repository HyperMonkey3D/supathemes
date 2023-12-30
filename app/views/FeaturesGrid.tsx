"use client";

import { useEffect, useState } from "react";
import Corner from "../components/Corner";
import Spheres from "../components/Spheres";

const FeaturesGrid = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="w-full xl:w-[1200px] min-h-[650px] h-fit  mx-auto py-11"
      id="features"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 sm:grid-rows-2 gap-4  md:gap-10 w-[85%] h-full  mx-auto">
        <div className="bg-slate-3 w-full h-full p-8 flex flex-col justify-evenly  lg:col-span-2 bg-black border border-brand-stroke-dark-gray rounded-xl  ">
          <div className="mb-5 flex justify-between items-center pr-12 ">
            <h2 className="text-2xl text-[#3EF1C6] font-semibold">Adaptive</h2>
            <div className="flex  w-fit">
              <p className="text-xl text-[#8C8C8C] pr-2">a</p>
              <p className="text-2xl text-[#FFB2CC] pr-2">A</p>
              <p className="text-4xl text-[#15D211] pr-2 font-bold">A</p>
            </div>
          </div>
          <div>
            <p className="text-white font-light">
              Our themes can be easily modified to fit your needs. From fonts to
              the background color, everything is clearly named and arranged so
              that you can make them yours.{" "}
            </p>
          </div>
        </div>
        <div className=" w-full h-full lg:row-span-2  bg-black border border-brand-stroke-dark-gray rounded-xl px-8 py-12 flex flex-col justify-evenly  ">
          <div className="mb-5">
            <h2 className="text-2xl text-white font-semibold">Responsive</h2>
          </div>
          <p className="text-white font-light">
            There are dozens of screen sizes out there. Each SupaTheme has been
            built with responsive behaviors in mind from the ground up so your
            content can be clearly seen, no matter the screen.{" "}
          </p>
        </div>
        <div className="bg-slate-3 w-full h-full p-8 flex flex-col justify-evenly bg-black border  border-brand-stroke-dark-gray rounded-xl relative ">
          <Spheres />
          <div className="md:mb-5">
            <h2 className="text-2xl text-[#3FBAFF] font-semibold">Connected</h2>
          </div>
          <div>
            <p className="text-white font-light">
              Depending on the theme type, you can find fully configured
              databases so that you can start publishing.
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          // id="modern-background"
          className=" w-full h-full p-8 flex flex-col justify-evenly border  hover:scale-105 transition ease-in-out duration-500 bg-black  border-brand-stroke-dark-gray rounded-xl relative corner overflow-clip"
        >
          <Corner hovered={isHovered} />
          <div className="md:mb-5 z-50">
            <h2 className="text-2xl text-[#FF5252] font-semibold">Modern</h2>
          </div>
          <div className="z-50">
            <p className="text-white font-light ">
              Built with the core design principles in mind, our themes are
              modern, attractive and functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
