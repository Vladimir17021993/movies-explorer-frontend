import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props) {
  return props.loggedIn ? <Outlet /> : <Navigate to="/sign-up" />;
}

export default ProtectedRoute;
