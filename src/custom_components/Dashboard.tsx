import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <>
      <h1>dashboard</h1>
      <h1>{localStorage.getItem("username")}</h1>
      <Button onClick={handleSignout}>Sign out</Button>
    </>
  );
};

export default Dashboard;
