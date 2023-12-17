import Image from "next/image";
import logoText from "@/public/text.svg";
import logo from "@/public/Group48.svg";

const Logo = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <div className="relative flex flex-col justify-start items-center sm:items-center sm:justify-center  sm:flex-row  w-full min-h-[500px] ">
        <Image
          src={logo}
          alt="logo"
          className="sm:-translate-y-8 sm:-translate-x-8 w-[270px] sm:w-[300px]  md:w-[350px] lg:w-[364px]"
        />
        <Image
          src={logoText}
          alt="supathemes"
          className="w-[320px] sm:w-[300px]  md:w-[350px] lg:w-[500px]  sm:-translate-x-14"
        />
      </div>
    </div>
  );
};

export default Logo;
//bg-slate-300
