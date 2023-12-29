import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <>
      <nav className=" border-0 border-b-2 flex justify-between p-6">
        <div>
          {" "}
          <h1 className=" font-black text-3xl text-primary">TOODO</h1>
        </div>
        <div>
          <Button onClick={handleSignout}>Sign out</Button>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
