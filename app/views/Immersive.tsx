"use client";

import { useEffect, useState } from "react";
import Polygon from "../components/Polygon";

const Immersive = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("immersive");
    if (section && !isVisible) {
      const rect = section.getBoundingClientRect();
      const visible = rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0;
      setIsVisible(visible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section
      className="w-full xl:w-[1200px] h-fit my-20 mx-auto"
      id="immersive"
    >
      <div className="">
        <div className="mx-3">
          <h2 className="text-7xl sm:text-8xl lg:text-9xl text-white  font-bold">
            Immersive by <br /> <span className="text">Design</span>
          </h2>
        </div>
        <div className=" h-fit   flex flex-wrap sm:flex-nowrap  justify-between border border-brand-stroke-dark-gray rounded-xl mx-3">
          <div className=" w-full md:w-[400px] h-[300px] sm:h-[400px]  md:h-[533px] ">
            <Polygon visible={isVisible} />
          </div>
          <div className="flex flex-wrap  justify-evenly  w-full h-[300px] sm:h-[400px] md:h-[533px]  md:w-[500px] lg:w-[550px] py-6 px-3 lg:py-0 lg:px-0">
            <div className="z-50  flex flex-col justify-center w-full px-5">
              <h3 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold">
                Create.
              </h3>
              <h3 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold ">
                Express.
              </h3>
              <h3 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold ">
                Promote.
              </h3>
            </div>
            <div className="w-full  z-50  flex justify-center items-center px-5">
              <p className="text-white text-xl md:text-2xl font-light ">
                Tell your story. Build your audience. Create your legacy. No
                compromises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Immersive;
