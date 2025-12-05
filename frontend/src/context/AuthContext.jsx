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

  useEffect(() => {
    const loadData = async () => {
      const token = await cookieStore.get("token");
      setToken(token?.value);
      try {
        const data = await cookieStore.get("data");
        setData(JSON.parse(data?.value));
      } catch (error) {
        console.log("Error parsing data from cookie:");
      }
    };
    loadData();
  }, []);

  const logIn = (data) => {
    cookieStore.set("token", data.token, {
      maxAge: 60 * 60 * 24 * 7,
    });

    cookieStore.set("data", JSON.stringify(data), {
      maxAge: 60 * 60 * 24 * 7,
    });
    // if (data.role == "student") {
    //   navigate("/student");
    // }
    // if (data.role == "alumni") {
    //   navigate("/alumni");
    // }
    navigate("/")
  };

  const logOut = () => {
    setToken(null);
    setData(null);
    cookieStore.delete("token");
    cookieStore.delete("data");
    navigate("/login");
  };

  const value = { data, token, logIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
