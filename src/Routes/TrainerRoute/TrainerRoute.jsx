import { Navigate } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import Loading from "../../Shared/Loading/Loading";
import PropTypes from "prop-types";

const TrainerRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Loading></Loading>;
  if (role === "trainer") return children;
  return <Navigate to="/" />;
};
export default TrainerRoute;
TrainerRoute.propTypes = {
  children: PropTypes.element,
};
