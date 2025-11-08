
import { Outlet } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";

function App() {
  return (
    <>
      <WelcomePage />
      <Outlet />
    </>
  );
}

export default App;
