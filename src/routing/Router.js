import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={
              route.isPrivate ? (
                <PrivateRoute>{<route.component />}</PrivateRoute>
              ) : (
                <route.component />
              )
            }
            key={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
