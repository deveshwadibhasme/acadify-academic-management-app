import { Outlet } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import { useAuth } from "./context/AuthContext";
import useToaster from "./hooks/useToaster";
import { ToastContainer } from "react-toastify";

function App() {
  const { token } = useAuth();

  const { showToast } = useToaster();

  if (!token) return <WelcomePage />;

  return (
    <>
      <Outlet context={{ showToast }} />
      <ToastContainer />
    </>
  );
}

export default App;
