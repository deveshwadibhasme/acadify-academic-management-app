import { useLocation, useNavigate } from "react-router-dom";
// import BACKEND_URL from "../utils/connect-api";
import { getImageLink } from "../utils/get-image-link";

const LogInPage = () => {
  // const url = BACKEND_URL;

  const { state } = useLocation();

  return (
    <div className="flex justify-center bg-gradient-to-tr w-full items-center h-full min-h-screen from-teal-400 via-sky-400 to-logo-background">
      {
      state ? <h1 className="text-3xl font-bold text-white"> {'Hi, ' + state.data.name}</h1> : 'LOG_IN'
      }
    </div>
  );
};

export default LogInPage;
