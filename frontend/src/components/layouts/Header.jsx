import { LogOut, Sidebar, User } from "lucide-react";
import { getImageLink } from "../../utils/get-image-link";
import Button from "../Button";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { logOut } = useAuth();

  const handleChange = () => {
    logOut();
  };

  return (
    <header className="h-20 mr-auto transition-all w-full px-5 row-start-1 row-end-2 col-start-1 col-end-4 shadow-sm shadow-black/40 bg-white">
      <div className="flex mx-auto h-full max-w-screen-xl items-center">
        <div className="max-w-50 ml-4 md:ml-0 mr-auto w-full flex items-center">
          <img src={"/Acadify Logo.svg"} className="h-10 md:h-12" alt="" />
        </div>

        <div className="ml-auto flex items-center">
          <Button
            onClick={handleChange}
            className={"md:ml-auto hover:bg-amber-50 h-10 text-sm px-0 bg-white rounded-full"}
          >
            <User className="md:w-auto md:h-10 rounded-full md:bg-white md:p-2 text-header-background" />{" "}
          </Button>
          <Button
            onClick={handleChange}
            className={" hover:bg-amber-400 h-10 text-sm px-0 bg-transparent"}
          >
            <span className="hidden md:block">Log Out</span>{" "}
            <LogOut className="md:h-5 md:ml-2 text-header-background" />{" "}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
