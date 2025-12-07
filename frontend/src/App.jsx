import { Outlet, useNavigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import { useAuth } from "./context/AuthContext";
import useToaster from "./hooks/useToaster";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Header from "./components/layouts/Header.jsx";
import SideBar from "./components/layouts/SideBar";
import AnimatedLogoLayout from "./components/layouts/AnimatedLogoLayout";

function App() {
  const { token, data, isLogIn } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToaster();

  console.log(isLogIn);

  useEffect(() => {
    if (token !== undefined && data?.role === "student") {
      navigate("/student");
    }
    if (token !== undefined && data?.role === "alumni") {
      navigate("/alumni");
    }
    if (token === undefined) {
      navigate("/");
    }
  }, [token]);

  return isLogIn ? (
    <AnimatedLogoLayout>
      <section className="grid grid-cols-[0.06fr_1fr] grid-rows-[0fr_1fr] min-h-screen max-w-screen gap-0 pl-8">
        <Header />
        <SideBar />
        <Outlet context={{ showToast }} />
        <ToastContainer />
      </section>
    </AnimatedLogoLayout>
  ) : (
    <WelcomePage />
  );
}

export default App;
