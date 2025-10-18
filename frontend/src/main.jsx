import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./pages/logInPage.jsx";


const root = createBrowserRouter([
  {
    path : "/login",
    element : <LogInPage />
  },                 
  {
    path: "/",
    element: <App />,
  },
])


createRoot(document.getElementById("root")).render(<RouterProvider router={root} />);
