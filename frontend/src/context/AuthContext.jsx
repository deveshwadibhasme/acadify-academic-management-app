import { useState, useEffect } from "react";
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
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [isLogIn, setIsLogIn] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const token = await cookieStore.get("token");
      setToken(token?.value);
      setIsLogIn(!!token)
      try {
        const data = await cookieStore.get("data");
        setData(JSON.parse(data?.value));
      } catch (error) {
        console.log("Error parsing data from cookie:");
      }
    };
    loadData();
  }, []);

  const logIn = async (data) => {
    await cookieStore.set({
      name: "token",
      value: data.token,
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });
    await cookieStore.set({
      name: "data",
      value: JSON.stringify(data),
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });
    setIsLogIn(true);
    if (data.role == "student") navigate("/student");
    else if (data.role == "alumni") navigate("/alumni");
    else navigate("/");
  };

  const logOut = () => {
    setToken(null);
    setData(null);
    cookieStore.delete("token");
    cookieStore.delete("data");
    navigate("/login");
    setIsLogIn(false);
  };

  const value = { data, token, logIn, logOut, isLogIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
