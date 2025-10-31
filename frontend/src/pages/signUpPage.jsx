import { useEffect, useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const SignUpPage = () => {
  const [display, setDisplay] = useState();

  const handleChange = (e) => {
    if (e.target.value.split("").length > 6) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col gap-1.5 max-w-screen min-h-screen relative w-full">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-90 absolute top-1/3 w-full min-h-[100px] bg-white/60 rounded-xl backdrop-blur-md p-4 transition-all duration-500 flex justify-center items-center flex-col gap-4"
        >
          <Input
            type={"e"}
            id={"email"}
            name={"email"}
            label={"Enter Your Email"}
            onChange={handleChange}
            className={
              "bg-transparent border-1 backdrop-blur-lg rounded-xl max-w-80 text-subtitle-text text-sm"
            }
          />
        </motion.form>
        {display && (
          <Button
            motion={motion}
            type="button"
            className="absolute top-1/2 translate-y-10 hover:bg-accent-link"
          >
            Next
            <ArrowRightCircle
              size={20}
              className="inline-block ml-2 text-accent-link transition group-hover:text-white"
            />
          </Button>
        )}
      </div>
    </>
  );
};

export default SignUpPage;
