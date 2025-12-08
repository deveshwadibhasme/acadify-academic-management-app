import axios from "axios";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import getURL from "../utils/get-url";

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

  const fetchData = async (logInToken) => {
    try {
      const response = await axios.get(getURL("/user/student-data"), {
        headers: {
          Authorization: `Bearer ${logInToken || token}`,
        },
      });
      setData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const tokenCookie = await cookieStore.get("token");
      setToken(tokenCookie?.value);
      setIsLogIn(!!tokenCookie);
      // try {
      //   const data = await cookieStore.get("data");
      //   setData(JSON.parse(data?.value));
      // } catch (error) {
      //   console.log("Error parsing data from cookie:");
      // }
    };
    loadData();
    if (token) fetchData();
    if (data?.role == "student") navigate("/student");
    else if (data?.role == "alumni") navigate("/alumni");
  }, []);

  useEffect(() => {
    if (token && !data) {
      fetchData();
    }
  }, [token, data]);

  const logIn = async (data) => {
    await cookieStore.set({
      name: "token",
      value: data.token,
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });
    setIsLogIn(true);
    fetchData(data.token);
    if (data.role == "student") navigate("/student");
    else if (data.role == "alumni") navigate("/alumni");
    // else navigate("/");
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
