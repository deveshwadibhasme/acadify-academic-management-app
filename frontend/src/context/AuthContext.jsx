import { useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState();
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const navigate = useNavigate();

  const logIn = (data) => {
    setToken(data.token);
    setData(data);
    localStorage.setItem("token", data.token);
    if (data.role == "student") {
      navigate("/student");
    }
    if (data.role == "alumni") {
      navigate("/alumni");
    }
  };

  const logOut = (data) => {
    setToken("");
    setData("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const value = { data, token, logIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
