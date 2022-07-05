import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function LoginRoute(props) {
  return !props.loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default LoginRoute;
