import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <div id="menu" className="menu ">
      {pathname === "/" && (
        <ul className=" left-0 w-full top-0  relative flex items-center px-0 py-0">
          <li className=" text-white mr-3 py-2 sm:py-0 ">
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
      )}
      {pathname !== "/" && (
        <ul className=" left-0 w-full top-0  relative flex items-center px-0 py-0">
          <li className=" text-white mr-3 py-2 sm:py-0 ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" text-white mr-3 py-2 sm:py-0 ">
            <Link href={"about"}>About</Link>
          </li>
          <li className=" text-white mr-3 py-2 sm:py-0 ">
            <Link href={"contact"}>Contact</Link>
          </li>
          <li className=" text-white py-2 sm:py-0 ">
            <Link href={"store"}>Themes</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DesktopMenu;
