import React from "react";
import { useAuth } from "../../context/AuthContext";

const WelcomeUser = () => {
  const { data } = useAuth();
  return (
    <div className="w-full min-h-10 h-full p-5">
      <h1 className="text-3xl font-extrabold text-title-headings">Welcome to the Acadify, {data.name}</h1>
    </div>
  );
};

export default WelcomeUser;
