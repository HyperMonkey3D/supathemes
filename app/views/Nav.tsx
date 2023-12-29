"use client";

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
      <nav className="w-full xl:w-[900px] h-[60px] bg-black mx-auto  border border-black rounded-full flex items-center  ">
        <div className="flex w-full  items-center px-5 relative">
          <div className="text-white w-16 h-5">
            <h3 id="logo" className="logo-show">
              SupaThemes
            </h3>
          </div>

          <div id="menu" className=" menu">
            <ul className="flex">
              <li className=" text-white mr-3">menu one</li>
              <li className=" text-white mr-3">menu two</li>
              <li className=" text-white mr-2">menu trhee</li>
              <li className=" text-white"> menu four</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
