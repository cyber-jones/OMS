import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { oms_url } from "../../utils/SD";

const IsAuth = ({ role }) => {
  const { token, authUser } = useSelector((state) => state.authUser);
  const location = useLocation();

  return authUser !== null && token !== null && authUser?.roles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to={oms_url.auth} state={{ from: location }} />
  );
};

export default IsAuth;
