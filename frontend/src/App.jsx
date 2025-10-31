import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AnimatedLogo from "./components/AnimatedLogo";
import Button from "./components/Button";
import { User2Icon } from "lucide-react";

function App() {
  return (
    <>
      <AnimatedLogo />
      <div>
        <Button toLink={'/signup'} isLink={true} type="button" className="translate-y-23">
          Sign Up <User2Icon size={20} className="ml-2" />
        </Button>
      </div>
      <h1 className="text-xl font-subtitle absolute bottom-1/3">
        Site Under Development......
      </h1>
      <Outlet />
    </>
  );
}

export default App;
