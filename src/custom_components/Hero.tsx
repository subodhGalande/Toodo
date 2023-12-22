import { Button } from "@/components/ui/button";
import Wave from "./wave";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col mt-10 items-center h-96 w-screen justify-center ">
        <div>
          <h1 className=" text-6xl max-w-5xl font-bold text-foreground text-center">
            Boost Your Productivity with Our Todo List
          </h1>
          <h2 className="text-3xl pt-6 font-medium text-center font-sans text-slate-500">
            Organize, Prioritize, and Conquer Your Tasks
          </h2>
        </div>
        <Link to="/Signup">
          <Button className="mt-14 text-lg px-12"> Get Started </Button>
        </Link>
      </div>
      <div className=" -mt-16 max-w-full max-h-80 ">
        <Wave />
      </div>
    </>
  );
};

export default Hero;
