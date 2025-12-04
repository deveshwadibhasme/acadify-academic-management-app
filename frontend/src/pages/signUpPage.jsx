import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

import SignUpForm from "../components/layouts/signUpForm";
import getURL from "../utils/get-url";
import VerificationForm from "../components/layouts/verificationForm";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
    number: "",
    gender: "",
    role: "",
    otp:""
  });

  const [verified, setVerified] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(getURL("/auth/user/signup"), formData);

      const response = result.data;
      console.log(response);
      if (response.type !== "success") {
        throw new Error("Internal Error");
      }
      alert(response.message);
      setVerified(!verified);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerification= async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(getURL("/auth/user/verify-and-register"), formData);

      const response = result.data;
      console.log(response);
      if (response.type !== "success") {
        throw new Error("Internal Error");
      }
      
      navigate('/login')
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(formData);

  return (
    <>
      <div className="flex items-center flex-col gap-1.5 max-w-screen min-h-screen relative w-full bg-gradient-to-tr from-teal-400 via-sky-400 to-logo-background">
        <AnimatePresence mode="wait">
          {!verified ? (
            <SignUpForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          ) : (
            <VerificationForm
              handleChange={handleChange}
              handleSubmit={handleVerification}
              email={formData.email}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SignUpPage;
