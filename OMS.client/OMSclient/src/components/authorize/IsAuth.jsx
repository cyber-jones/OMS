import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { oms_url } from "../../utils/SD";
import { useAuth } from "../../utils/isAuthorized";

const IsAuth = ({ roles }) => {
  const { token, authUser } = useSelector((state) => state.authUser);
  const location = useLocation();
  const isAuth = useAuth(roles);

  return roles.length > 0  ? (
    isAuth ? (
      <Outlet />
    ) : (
      <Navigate to={oms_url.auth} state={{ from: location }} />
    )
  ) : authUser !== null && token !== null ? (
    <Outlet />
  ) : (
    <Navigate to={oms_url.auth} state={{ from: location }} />
  );
};

export default IsAuth;
