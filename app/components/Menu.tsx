import { Link as ScrollLink } from "react-scroll";

const DesktopMenu = () => {
  return (
    <div id="menu" className=" menu">
      <ul className=" flex flex-col bg-slate-300 sm:bg-transparent  sm:flex-row items-center ">
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
            offset={-100}
            className="cursor-pointer"
          >
            Immersive
          </ScrollLink>
        </li>
        <li className=" text-white mr-3">
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
        <li className=" text-white mr-3">
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
        <li className=" text-white">
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
