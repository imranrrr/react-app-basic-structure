import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (user) {
    return children;
  } else {
    navigate("/signin");
    return;
  }
}
