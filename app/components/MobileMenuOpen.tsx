import { Link as ScrollLink } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenuOpen = () => {
  const pathname = usePathname();

  return (
    <div className="bg-slate-300">
      {pathname === "/" && (
        <ul className="bg-brand-dark-gray border border-brand-darker-gray rounded-2xl absolute top-12 left-0 w-full flex flex-col px-5 py-5">
          <li className=" text-white mr-3 py-2  ">
            <ScrollLink
              to="supa"
              smooth={true}
              duration={500}
              offset={-150}
              className="cursor-pointer "
            >
              Supa
            </ScrollLink>
          </li>
          <li className=" text-white mr-3 py-2">
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
          <li className=" text-white mr-3 py-2 ">
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
          <li className=" text-white mr-3 py-2 ">
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
          <li className=" text-white py-2 ">
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
        <ul className="bg-brand-dark-gray border border-brand-darker-gray rounded-2xl absolute top-12 left-0 w-full flex flex-col px-5 py-5">
          <li className=" text-white mr-3 py-2 ">
            <Link href={"/"}>Home</Link>{" "}
          </li>
          <li className=" text-white mr-3 py-2 ">
            <Link href={"about"}>About</Link>
          </li>
          <li className=" text-white mr-3 py-2 ">
            <Link href={"contact"}>Contact</Link>
          </li>
          <li className=" text-white mr-3 py-2 ">
            <Link href={"store"}>Themes</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenuOpen;
