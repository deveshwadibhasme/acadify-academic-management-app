import React from "react";
import Select from "../Select";
import { motion } from "framer-motion";
import Input from "../Input";
import Button from "../Button";
import { ArrowRightCircle } from "lucide-react";
import Timer from "../Timer";

const verificationForm = ({ handleChange, handleSubmit, email }) => {
  const options = [
    {
      role: [
        {
          value: "student",
        },
        {
          value: "alumni",
        },
      ],
      gender: [
        {
          value: "male",
        },
        {
          value: "female",
        },
        {
          value: "other",
        },
      ],
    },
  ];

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0.6, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="max-w-xl absolute top-20 w-full h-auto bg-white/60 rounded-xl overflow-hidden backdrop-blur-md p-4 transition-all duration-500 flex items-center flex-col gap-y-8"
    >
      <Input
        onChange={handleChange}
        type={"email"}
        label={"Enter Your Email"}
        name={"email"}
        value={email}
        className={`bg-transparent border-1 w-full backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
      ></Input>
      <Input
        onChange={handleChange}
        wrapperClass={""}
        type={"number"}
        label={"Enter Your Mobile Number"}
        name={"number"}
        className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
      ></Input>
      <div className="w-full flex items-center h-auto gap-x-3">
        <Select
          id={"role"}
          onChange={handleChange}
          label={"Select Your Role"}
          placeHolder={"Select Role"}
          name={"role"}
          className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
          // value={options[0].role[0]}
          options={options[0].role}
        ></Select>
        <Select
          id={"gender"}
          onChange={handleChange}
          label={"Select Your Gender"}
          placeHolder={"Select Gender"}
          name={"gender"}
          className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
          // value={options[0].role[0]}
          options={options[0].gender}
        ></Select>
      </div>
      <div className="w-full flex items-center h-auto gap-x-3">
        <Input
          id={"name"}
          onChange={handleChange}
          label={"Enter Your First Name"}
          placeHolder={"Enter First Name"}
          name={"name"}
          className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
          // value={''}
        ></Input>
        <Input
          id={"last_name"}
          onChange={handleChange}
          label={"Enter Your Last Name"}
          placeHolder={"Enter Last Name"}
          name={"last_name"}
          className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
          // value={''}
        ></Input>
      </div>
      <div className="w-full flex items-center h-auto gap-x-3">
        <Input
          id={"otp"}
          onChange={handleChange}
          label={"Enter Your One Time Password"}
          placeHolder={"Enter OTP"}
          name={"otp"}
          className={`bg-transparent border-1 backdrop-blur-lg rounded-xl text-subtitle-text text-sm `}
          // value={''}
        ></Input>
        <Timer initialTime={300} />
      </div>
      <Button
        onClick={handleSubmit}
        motion={motion}
        type={"button"}
        className=" hover:bg-accent-link"
      >
        Proceed
        <ArrowRightCircle
          size={20}
          className="inline-block ml-2 text-accent-link transition group-hover:text-white"
        />
      </Button>
    </motion.form>
  );
};

export default verificationForm;
