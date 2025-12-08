import {
  BookOpen,
  DoorOpen,
  GraduationCapIcon,
  Home,
  LogOut,
  Sidebar,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useAuth } from "../../context/AuthContext";

const SideBar = () => {
  const { logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = () => {
    logOut()
  };

  return (
    <div
      className={`absolute left-0 top-0 min-h-screen ${
        open ? "max-w-50" : "max-w-12 lg:max-w-20"
      } w-full bg-white row-start-2 row-end-3 col-start-1 col-end-2 flex mx-auto flex-col h-full items-start py-5 pt-7 justify-start shadow-2xl inset-shadow-black px-2 shadow-black transition-all`}
    >
      <div className="flex justify-center items-center">
        <Sidebar
          onClick={handleClick}
          size={"30px"}
          className="cursor-pointer text-header-background"
        />

        <div
          className={`${
            open ? "max-w-50" : "max-w-0"
          }  w-full flex items-center`}
        >
          <img src={"/Acadify Logo.svg"} className="h-10 lg:h-12 ml-5" alt="" />
        </div>
      </div>

      <nav className="flex flex-col items-center w-full h-1/1 gap-20 mt-10">
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-1 lg:p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <Home
            size={30}
            className={`${open ? "mr-2" : "mr-0"} transition-all`}
          />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>Home</span>
        </Link>
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-1 lg:p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <GraduationCapIcon
            size={30}
            className={`${open ? "mr-2" : "mr-0"} transition-all`}
          />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>
            Your Mentors
          </span>
        </Link>
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-1 lg:p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <DoorOpen
            size={30}
            className={`${open ? "mr-2" : "mr-0"} transition-all`}
          />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>Class</span>
        </Link>
        <Link className="flex max-w-40 text-center items-center w-full h-auto p-1 lg:p-2 bg-white text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all">
          <BookOpen
            size={30}
            className={`${open ? "mr-2" : "mr-0"} transition-all`}
          />
          <span className={`mr-auto ${open ? "block" : "hidden"}`}>
            Notes/Books
          </span>
        </Link>
      </nav>
      <Button
        onClick={handleChange}
        className={" flex max-w-40 text-center mx-auto items-center w-full h-auto md:py-1 lg:px-5 px-1 hover:bg-orange-400 bg-red-400 text-header-background rounded-2xl shadow-sm shadow-black/50 transition-all"}
      >
        <LogOut size={30} className={`${open ? "mr-2" : "mr-0"} text-black transition-all`} />{" "}
        <span className={`${open ? "block" : "hidden"} mr-auto transition-all hover:text-white`}>Log Out</span>{" "}
      </Button>
    </div>
  );
};

export default SideBar;
