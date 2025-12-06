import { BookOpen, DoorOpen, GraduationCapIcon, Home, Sidebar } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  

  return (
    <div
      className={`absolute left-0 top-0 min-h-screen ${
        open ? "max-w-50" : "max-w-15 md:max-w-20"
      } w-full bg-white/60 row-start-2 row-end-3 col-start-1 col-end-2 flex mx-auto flex-col h-full items-start py-5 pt-7 justify-start shadow-2xl inset-shadow-black px-2 shadow-black transition-all`}
    >
      <div className="flex justify-center items-center">
      <Sidebar
        onClick={handleClick}
        size={"30px"}
        className="cursor-pointer text-header-background"
      />

      <div className={`${open ? "max-w-50" : "max-w-0"}  w-full flex items-center`}>
        <img src={"/Acadify Logo.svg"} className="h-10 md:h-12 ml-5" alt="" />
      </div>
      </div>

      <nav className="flex flex-col items-center w-full h-1/1 justify-evenly my-auto">
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <Home className={`${open ? "mr-2" : "mr-0"} transition-all`} />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>
            Home
          </span>
        </Link>
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <GraduationCapIcon className={`${open ? "mr-2" : "mr-0"} transition-all`} />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>
            Your Mentors
          </span>
        </Link>
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <DoorOpen className={`${open ? "mr-2" : "mr-0"} transition-all`} />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>
            Class
          </span>
        </Link>
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <BookOpen className={`${open ? "mr-2" : "mr-0"} transition-all`} />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>
            Notes/Books
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
