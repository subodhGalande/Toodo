import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="absolute mt-10 flex mx-auto justify-between px-6 w-full">
        <div>
          <h1 className=" text-3xl font-grotesque font-extrabold text-primary ">
            {" "}
            Toodo{" "}
          </h1>
        </div>
        <div className="flex gap-5 text-foreground">
          {" "}
          <Link to="/">
            {" "}
            <Button variant="ghost" className="text-base font-bold">
              {" "}
              Home
            </Button>{" "}
          </Link>{" "}
          <Button variant="ghost" className="text-base font-bold">
            About
          </Button>
          <Link to="/signin">
            {" "}
            <Button variant="ghost" className=" text-base font-bold">
              Sign in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className=" text-base font-bold">SIGN UP</Button>
          </Link>{" "}
        </div>
        <ModeToggle />
      </nav>
    </>
  );
};

export default Navbar;
