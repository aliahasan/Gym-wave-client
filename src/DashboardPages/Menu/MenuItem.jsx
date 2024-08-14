import PropTypes, { func } from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, handleMenuItemClick, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-green-300   hover:text-gray-700 ${
          isActive ? "bg-green-300  text-gray-800" : "text-gray-500"
        }`
      }
      onClick={handleMenuItemClick}
    >
      {/* <Icon className='w-5 h-5' /> */}

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};
MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.elementType,
  handleMenuItemClick: func,
};

export default MenuItem;
