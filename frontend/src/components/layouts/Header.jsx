import { LogOut, Sidebar } from "lucide-react";
import { getImageLink } from "../../utils/get-image-link";
import Button from "../Button";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { logOut } = useAuth();
  
  const handleChange = () => {
    logOut()
  };

  return (
    <header className="bg-logo-background h-20 mr-auto transition-all w-full px-5 row-start-1 row-end-2 col-start-2 col-end-4">
      <div className="flex mx-auto h-full max-w-screen-xl items-center">
        <div className="max-w-50 w-full flex items-center">
          <img src={"/Acadify Logo.svg"} className="h-8 md:h-12 ml-5" alt="" />
        </div>

        <Button onClick={handleChange} className={"ml-auto hover:bg-amber-50 h-10 text-sm px-0"}>
         <span className="hidden md:block">Log Out</span> <LogOut className="md:h-5 md:ml-2" />{" "}
        </Button>
      </div>
    </header>
  );
};

export default Header;
