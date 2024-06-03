import React from "react";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  if (loading) return <Loading />;
  
  if (user) return children;
  
  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
