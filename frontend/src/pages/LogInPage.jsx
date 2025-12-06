import { motion } from "framer-motion";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import useToaster from "../hooks/useToaster";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { ArrowRightCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import getURL from "../utils/get-url";

const LogInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { logIn } = useAuth();

  const handleChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const { showToast } = useToaster();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formData.email === "" || formData.password === "") return

      const result = await axios.post(getURL("/auth/user/login"), formData);

      const response = result.data;

      if (response.type !== "success") {
        throw new Error("Internal Error");
      }
      logIn(response.result);
      showToast(response.type, response.message);
    } catch (error) {
      console.error(error);
      showToast("error", error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center w-full h-full min-h-screen">
      <h1 className="mt-10 text-3xl text-title-headings text-shadow-lg font-bold uppercase">Log In to accesss your space</h1>
      <motion.form
        onSubmit={(e) => e.preventDefault()}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: -30 }}
        className="max-w-xl absolute top-30 w-full h-auto bg-white/60 rounded-xl overflow-hidden backdrop-blur-md p-4 transition-all duration-500 flex items-center flex-col gap-y-8"
      >
        <Input
          onChange={handleChange}
          type={"email"}
          label={"Enter Your Email"}
          name={"email"}
          className={`bg-transparent border-1 w-full backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
        ></Input>
        <Input
          onChange={handleChange}
          wrapperClass={""}
          type={"password"}
          label={"Enter Your Password"}
          name={"password"}
          className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
        ></Input>
        <Button
          onClick={handleSubmit}
          motion={motion}
          type={"button"}
          className=" hover:bg-accent-link bg-white shadow-2xl"
        >
          Proceed
          <ArrowRightCircle
            size={20}
            className="inline-block ml-2 text-accent-link transition group-hover:text-white"
          />
        </Button>
      </motion.form>
      <ToastContainer />
    </div>
  );
};

export default LogInPage;
