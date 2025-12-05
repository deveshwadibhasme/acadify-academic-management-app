import AnimatedLogo from "../components/AnimatedLogo";
import Button from "../components/Button";
import { User2, User2Icon, UserCheck2Icon, UserCheckIcon } from "lucide-react";

const WelcomePage = () => {
  return (
    <div className="max-w-screen min-h-screen flex items-center flex-col justify-center">
      <AnimatedLogo />
      <h1 className="text-xl font-subtitle absolute bottom-15">
        Site Under Development......
      </h1>
      <div className="flex gap-10">
        <Button
          toLink={"/signup"}
          isLink={true}
          type="button"
          className="translate-y-23"
        >
          Sign Up <UserCheck2Icon size={20} className="ml-2" />
        </Button>
        <Button
          toLink={"/login"}
          isLink={true}
          type="button"
          className="translate-y-23"
        >
          Log In <UserCheckIcon size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
