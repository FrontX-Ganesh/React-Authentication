/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ErrorBoundary from "../ErrorPage/ErrorBoundary";

const Authentication = () => {
  const isLogin = localStorage.getItem("login");
  let location = useLocation();
  const lastLocation = location.pathname;
  if (isLogin) {
    return (
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    );
  }
  return <Navigate state={{ fromPage: lastLocation }} to="/login" replace />;
};

export default Authentication;
