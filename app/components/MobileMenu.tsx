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
    <div className=" w-full flex justify-end">
      <div className="text-white">
        <button className="bg-slate-200 px-3 py-1" onClick={openState}>
          X
        </button>
      </div>
      <div>
        {open && (
          <div>
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
