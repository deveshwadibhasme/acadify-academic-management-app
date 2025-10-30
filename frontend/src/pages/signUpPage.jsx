import Input from "../components/Input";
import TextLogo from "/Acadify Logo.svg";

const SignUpPage = () => {
  return (
    <>
      <div className="flex items-center flex-col gap-1.5 max-w-screen min-h-screen relative w-full">
        <form className="max-w-90 absolute top-1/3 w-full min-h-[100px] bg-white/60 rounded-xl backdrop-blur-md p-4 transition-all duration-500 flex justify-center items-center flex-col gap-4">
          <Input
            type={"email"}
            id={"email"}
            name={"email"}
            label={"Enter Your Email"}
            className={
              "bg-transparent border-1 backdrop-blur-lg rounded-xl max-w-80 text-subtitle-text text-sm"
            }
          />
          <button type="button" className="p-2 px-6 bg-highlight-hover rounded-lg">Proceed</button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
