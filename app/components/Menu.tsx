import { Link as ScrollLink } from "react-scroll";

const DesktopMenu = () => {
  return (
    <div id="menu" className="menu ">
      <ul className="z-50  absolute top-12 left-0 w-full sm:top-0 sm:left-0 sm:relative flex flex-col sm:flex-row sm:items-center px-5 py-5 sm:px-0 sm:py-0">
        <li className=" text-white mr-3 py-2 sm:py-0">
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
        <li className=" text-white mr-3 py-2 sm:py-0">
          <ScrollLink
            to="immersive"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Immersive
          </ScrollLink>
        </li>
        <li className=" text-white mr-3 py-2 sm:py-0">
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
        <li className=" text-white mr-3 py-2 sm:py-0">
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
        <li className=" text-white py-2 sm:py-0">
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            offset={0}
            className="cursor-pointer"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
