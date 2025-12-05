import { Outlet, useNavigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import { useAuth } from "./context/AuthContext";
import useToaster from "./hooks/useToaster";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Header from "./components/layouts/Header";
import SideBar from "./components/layouts/SideBar";
import AnimatedLogoLayout from "./components/layouts/AnimatedLogoLayout";

function App() {
  const { token, data } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToaster();
  const [isLogIn, setIsLogIn] = useState(true);

  useEffect(() => {
    if (token !== undefined && data?.role === "student") navigate("/student");
    if (token !== undefined && data?.role === "alumni") navigate("/alumni");
    if (token === undefined) {
      navigate("/");
      setIsLogIn(false);
    }
  }, [token]);

  return isLogIn ? (
    <AnimatedLogoLayout>
      <Header />
      <SideBar />
      <Outlet context={{ showToast }} />
      <ToastContainer />
    </AnimatedLogoLayout>
  ) : (
    <WelcomePage />
  );
}

export default App;
