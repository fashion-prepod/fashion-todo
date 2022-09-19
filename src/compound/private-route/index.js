import React from "react";
import { getUser } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = useSelector(getUser);

  return user ? children : <Navigate to="/" />;
};
