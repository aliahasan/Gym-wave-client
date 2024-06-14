import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../../Shared/Loading/Loading";
import useRole from "../../Hooks/useRole";
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loading></Loading>;
  if (role === "admin") return children;
  return <Navigate to="/" />;
};

export default AdminRoute;

AdminRoute.propTypes = {
  children: PropTypes.node,
};
