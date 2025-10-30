import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AnimatedLogo from "./components/AnimatedLogo";



function App() {

  

  return (
    <>
      <AnimatedLogo />
        <h1 className="text-xl font-subtitle absolute bottom-1/3">Site Under Development......</h1>
      <Outlet />
    </>
  );
}

export default App;
