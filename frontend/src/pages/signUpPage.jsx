import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    role: "",
  });

  const [display, setDisplay] = useState(0);
  const [button, setButton] = useState("Next");
  const navigate = useNavigate();

  const inputs = [
    {
      type: "email",
      id: "email",
      name: "email",
      label: "Enter Your Email",
    },
    {
      type: "password",
      id: "password",
      name: "password",
      label: "Enter Your Password",
    },
    {
      type: "input",
      id: "name",
      name: "name",
      label: "Enter Your First Name",
    },
    {
      type: "input",
      id: "last_name",
      name: "last_name",
      label: "Enter Your Last Name",
    },
    {
      type: "input",
      id: "gender",
      name: "gender",
      label: "Enter Your Gender",
    },
    {
      type: "number",
      id: "number",
      name: "number",
      label: "Enter Your Number",
    },
    {
      type: "input",
      id: "role",
      name: "role",
      label: "Enter Your Role",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formData);

    navigate("/login", {
      state: { data: formData },
    });
  };

  const handleChange = (e, data) => {
    setFormData((state) => ({
      ...state,
      [data]: e.target.value,
    }));
  };

  console.log(formData);

  const handleNextClick = (e) => {
    e.preventDefault();

    setDisplay(display + 1);

    if (display >= inputs.length - 2) {
      console.log("lk");
      setButton("submit");
      setDisplay(inputs.length - 1);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col gap-1.5 max-w-screen min-h-screen relative w-full bg-gradient-to-tr from-teal-400 via-sky-400 to-logo-background">
        <AnimatePresence key={display} mode="sync">
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            key={display}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="max-w-90 absolute top-1/3 w-full h-auto bg-white/60 rounded-xl backdrop-blur-md p-4 transition-all duration-500 flex justify-center items-center flex-col gap-y-8"
          >
            {
              <div className="w-full">
                <Input
                  type={inputs[display]?.type}
                  id={inputs[display]?.id}
                  name={inputs[display]?.name}
                  label={inputs[display]?.label}
                  onChange={(e) => handleChange(e, inputs[display].name)}
                  className={`bg-transparent border-1 backdrop-blur-lg rounded-xl max-w-80 text-subtitle-text text-sm `}
                />
              </div>
            }
          </motion.form>
        </AnimatePresence>
        <Button
          onClick={button === "Next" ? handleNextClick : handleSubmit}
          motion={motion}
          type={`${button === "Next" ? "button" : button}`}
          className="absolute top-1/3 translate-y-30 hover:bg-accent-link"
        >
          {button === "Next" ? "Next" : "Sign Up"}
          <ArrowRightCircle
            size={20}
            className="inline-block ml-2 text-accent-link transition group-hover:text-white"
          />
        </Button>
      </div>
    </>
  );
};

export default SignUpPage;
