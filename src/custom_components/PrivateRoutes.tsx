import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const localtoken = localStorage.getItem("token");
  console.log(localtoken);

  return localtoken !== null ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
