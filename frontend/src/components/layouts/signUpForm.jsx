import React from "react";
import Input from "../Input";
import Button from "../Button";
import { ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";

const signUpForm = ({ handleChange, handleSubmit }) => {
  return (
    <motion.form
      onSubmit={(e) => e.preventDefault()}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -30 }}
      className="max-w-xl absolute top-1/4 w-full h-auto bg-white/60 rounded-xl overflow-hidden backdrop-blur-md p-4 transition-all duration-500 flex items-center flex-col gap-y-8"
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
      <Input
        onChange={handleChange}
        type={"password"}
        label={"Confirm Your Password"}
        name={"confirm"}
        className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
      ></Input>
      <Button
        onClick={handleSubmit}
        motion={motion}
        type={"button"}
        className=" hover:bg-accent-link"
      >
        Next
        <ArrowRightCircle
          size={20}
          className="inline-block ml-2 text-accent-link transition group-hover:text-white"
        />
      </Button>
    </motion.form>
  );
};

export default signUpForm;
