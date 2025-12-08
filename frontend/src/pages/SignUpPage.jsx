import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

import SignUpForm from "../components/layouts/SignUpForm";
import getURL from "../utils/get-url";
import VerificationForm from "../components/layouts/VerificationForm";
import { ToastContainer } from "react-toastify";
import useToaster from "../hooks/useToaster";
import Button from "../components/Button";
import { UserCheckIcon } from "lucide-react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
    number: "",
    gender: "",
    role: "",
    otp: "",
  });

  const [verified, setVerified] = useState(false);
  const [isVerified, setIsVerified] = useState(true);

  const { showToast } = useToaster();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      showToast("info", "Type Your Credentials");
      return;
    }
    try {
      const result = await axios.post(getURL("/auth/user/signup"), formData);

      const response = result.data;

      if (response.type !== "success") {
        showToast(response.type, response.message);
        throw new Error("Internal Error");
      }
      showToast(response.type, response.message);
      setVerified(!verified);
    } catch (error) {
      if ((error.name = "AxiosError")) {
        showToast("error", error.response?.data.message);
      }
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        getURL("/auth/user/verify-and-register"),
        formData
      );

      const response = result.data;
      showToast(response.type, response.message);

      if (response.type !== "success") {
        showToast("error", error.response.data.message);
        throw new Error("Internal Error");
      }
      setFormData({
        email: "",
        password: "",
        name: "",
        last_name: "",
        number: "",
        gender: "",
        role: "",
        otp: "",
      });
      
      setIsVerified(!isVerified);
    } catch (error) {
      if ((error.name = "AxiosError")) {
        showToast("error", error.response.data.message);
      }
    }
  };

  const handleChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex items-center flex-col gap-1.5 max-w-screen min-h-screen relative w-full ">
        <h1 className="mt-10 text-center text-3xl text-title-headings text-shadow-lg font-bold uppercase">
          Sign Up to get into your space
        </h1>
        <AnimatePresence mode="wait">
          {!verified ? (
            <SignUpForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          ) : isVerified ? (
            <VerificationForm
              handleChange={handleChange}
              handleSubmit={handleVerification}
              email={formData.email}
            />
          ) : (
            <Button
              toLink={"/login"}
              isLink={true}
              type="button"
              className="translate-y-23"
            >
              Log In <UserCheckIcon size={20} className="ml-2" />
            </Button>
          )}
        </AnimatePresence>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignUpPage;
