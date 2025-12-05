import { Sidebar } from "lucide-react";
import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  };

  return (
    <div
      className={`absolute left-0 top-0 min-h-screen ${open ? "max-w-50" : "max-w-15 md:max-w-20"} w-full bg-logo-background row-start-2 row-end-3 col-start-1 col-end-2 flex mx-auto flex-col h-full items-start py-5 pt-7 justify-start shadow-2xl px-2 shadow-black transition-all`}
    >
      <Sidebar
        onClick={handleClick}
        size={"30px"}
        className="text-white cursor-pointer"
      />  

      <nav className="flex flex-col items-center w-full h-1/2 bg-white">

      </nav>
    </div>
  );
};

export default SideBar;
