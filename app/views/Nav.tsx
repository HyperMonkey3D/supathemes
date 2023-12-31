"use client";

import Link from "next/link";
import Image from "next/image";
import logoBnW from "@/public/logoBnW.svg";
import { Element, scroller, Link as ScrollLink } from "react-scroll";

const Nav = () => {
  if (typeof window !== "undefined") {
    window.onscroll = () => calculateStickiness();

    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    const menu = document.getElementById("menu");
    const sticky: any = navbar?.offsetTop;

    const calculateStickiness = () => {
      if (window.scrollY > sticky) {
        navbar?.classList.add("sticky");
        logo?.classList.add("logo-hide");
        menu?.classList.add("menu-moved");
      } else {
        navbar?.classList.remove("sticky");
        logo?.classList.remove("logo-hide");
        menu?.classList.remove("menu-moved");
      }
    };
  }

  return (
    <div id="navbar" className="py-4 navbar ">
      <nav className="w-full xl:w-[900px] h-[60px] inner-bar mx-auto  border border-brand-darker-gray rounded-full flex items-center  justify-center">
        <div className="flex w-full  items-center px-5 relative">
          <div className="text-white w-16 h-5 flex items-center">
            <h3 id="logo" className="logo-show ">
              <Link href={"/"}>
                <Image src={logoBnW} alt="logo" width={45} />
              </Link>
            </h3>
          </div>

          <div id="menu" className=" menu">
            <ul className="flex items-center ">
              <li className=" text-white mr-3">
                <ScrollLink
                  to="supa"
                  smooth={true}
                  duration={500}
                  offset={-150}
                  className="cursor-pointer"
                >
                  Supa
                </ScrollLink>
              </li>
              <li className=" text-white mr-3">
                <ScrollLink
                  to="immersive"
                  smooth={true}
                  duration={500}
                  offset={-150}
                  className="cursor-pointer"
                >
                  Immersive
                </ScrollLink>
              </li>
              <li className=" text-white mr-2">
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  offset={-150}
                  className="cursor-pointer"
                >
                  Features
                </ScrollLink>
              </li>
              <li className=" text-white">
                <ScrollLink
                  to="explore"
                  smooth={true}
                  duration={500}
                  offset={-150}
                  className="cursor-pointer"
                >
                  Explore
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
