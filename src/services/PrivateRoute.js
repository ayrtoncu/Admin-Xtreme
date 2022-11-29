import React, { useContext } from "react";
import {Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Dashboard from "../Components/Dashboard";

const PrivateRoute = ({ component: RouteComponent, ...otherProps }) => {
  const { currentUser } = useContext(AuthContext);
  return !!currentUser ? <Dashboard/>: <Navigate to ="/login"/>
};

export default PrivateRoute;
