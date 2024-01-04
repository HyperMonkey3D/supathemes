"use client";

import Link from "next/link";
import Image from "next/image";
import logoBnW from "@/public/logoBnW.svg";
import Menu from "../components/Menu";
import MobileMenu from "../components/MobileMenu";

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
    <div id="navbar" className="py-4  z-50">
      <nav className="z-50 w-[90%] md:w-[700px] lg:w-[900px] h-[60px] inner-bar mx-auto  border border-brand-darker-gray rounded-full flex items-center  justify-center">
        <div className="flex w-full  items-center px-5 relative">
          <div className="text-white w-16 h-5 flex items-center">
            <div id="logo" className="logo-show">
              <Link href={"/"}>
                <Image src={logoBnW} alt="logo" width={45} />
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <Menu />
          </div>
          <div className="block sm:hidden  w-full ">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
