import { LogOut, Sidebar, User } from "lucide-react";
import { getImageLink } from "../../utils/get-image-link";
import Button from "../Button";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { data } = useAuth();

  return (
    <header className="h-20 mr-auto transition-all w-full px-5 row-start-1 row-end-2 col-start-1 col-end-4 shadow-sm shadow-black/40 bg-white">
      <div className="flex mx-auto h-full max-w-screen-xl items-center relative">
        <div className="max-w-50 ml-4 lg:ml-0 mr-auto w-full flex items-center">
          <img src={"/Acadify Logo.svg"} className="h-10 lg:h-12" alt="" />
        </div>

        <div className="ml-auto flex items-center">
          <Button
            // onClick={handleChange}
            className={
              "lg:ml-auto hover:bg-amber-50 bg-transparent h-10 text-sm px-0 rounded-full shadow-xl"
            }
          >
            <User className="lg:w-auto lg:h-11 rounded-full lg:bg-white lg:p-2 " />{" "}
          </Button>
          <div className="absolute top-6 right-7 md:right-15 capitalize h-8 px-4 md:min-h-10 max-w-45 md:w-full pt-1 text-title-headings font-bold bg-white shadow-sm shadow-black/20 rounded-2xl text-sm md:text-lg text-center">
            {data?.role + " Space" || "Error!! Login Again"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
