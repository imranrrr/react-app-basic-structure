import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  debugger;
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return children;
  } else {
    navigate("/signin");
    return;
  }
}
