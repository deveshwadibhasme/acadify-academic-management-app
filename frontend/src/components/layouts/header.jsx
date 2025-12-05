import { Sidebar } from "lucide-react";
import { getImageLink } from "../../utils/get-image-link";

const Header = () => {
  return (
    <header className="bg-logo-background h-20 w-full px-5">
      <div className="flex mx-auto h-full max-w-screen-xl items-center">
        <div>
          <Sidebar size={"30px"} className="text-white" />
        </div>

        <img src={"/Acadify Logo.svg"} className="h-10 ml-5" alt="" />
      </div>
    </header>
  );
};

export default Header;
