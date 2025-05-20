import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { oms_url } from "../../utils/SD";



const IsLoggedIn = () => {
  const { token, authUser } = useSelector((state) => state.authUser);

  return authUser == null &&
    token == null ? (
    <Outlet />
  ) : (
    <Navigate to={oms_url.dashBoard} />
  );
};

export default IsLoggedIn;
