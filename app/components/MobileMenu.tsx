import { useState } from "react";
import Menu from "./Menu";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const openState = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-end items-center pr-5 ">
      <div className="text-white ">
        <button className="px-3 py-1" onClick={openState}>
          X
        </button>
      </div>
      <div className="bg-slate-400 w-fit h-fit">
        {open && (
          <div className=" w-full h-full ">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
