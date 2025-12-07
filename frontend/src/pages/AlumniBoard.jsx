import React from "react";
import useToaster from "../hooks/useToaster";
import WelcomeUser from "../components/layouts/WelcomeUser";

const AlumniBoard = () => {
  return (
    <section className="max-w-screen row-start-2 row-end-auto col-start-2 col-end-3 w-full h-full">
      <WelcomeUser />
    </section>
  );
};

export default AlumniBoard;
