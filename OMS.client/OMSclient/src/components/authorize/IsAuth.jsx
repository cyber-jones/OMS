import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { oms_url } from "../../utils/SD";

const IsAuth = ({ role }) => {
  const { token, user } = useSelector((state) => state.auth);
  const location = useLocation();

  return user !== null && token !== null && user?.roles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to={oms_url.auth} state={{ from: location }} />
  );
};

export default IsAuth;
