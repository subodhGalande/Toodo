import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" flex justify-between mt-6 px-6">
        <div>
          <h1 className=" font-black text-3xl text-primary "> TOODO </h1>
        </div>
        <div className="flex gap-5 text-stone-300">
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
      </nav>
    </>
  );
};

export default Navbar;
