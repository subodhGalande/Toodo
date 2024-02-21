import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      <div className=" max-w-screen max-h-screen mx-auto">
        <Navbar />
        <div className=" w-full h-screen  mx-auto flex items-center justify-center flex-col   ">
          <div>
            <h1 className=" text-6xl max-w-5xl font-grotesque font-bold text-foreground text-center">
              Boost Your Productivity with Our Todo List
            </h1>
            <h2 className="text-2xl font-grotesque pt-6 font-medium text-center text-muted-foreground ">
              Organize, Prioritize, and Conquer Your Tasks
            </h2>
          </div>
          <Link to="/Signup">
            <Button className=" bg mt-14 text-lg px-12  dark:text-foreground">
              {" "}
              Get Started{" "}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
