import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const localtoken = localStorage.getItem("token");

  console.log(localtoken);

  if (!localtoken) {
    return <Navigate to="/signin" replace={true} />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoutes;
