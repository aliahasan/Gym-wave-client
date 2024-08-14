import { Link, NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const navLinks = [
    { name: "Home", route: "/" },
    { name: "Classes", route: "/classes" },
    { name: "Gallery", route: "/gallery" },
    { name: "Trainers", route: "/trainers" },
    { name: "Community", route: "/community" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="bg-slate-50 fixed top-0 w-full z-50">
      <nav className="max-w-[2520px] w-full">
        <div className="mx-auto sm:px-6 lg:px-6">
          <div className="px-4 py-4 flex items-center justify-between">
            <div>
              <Link to="/">
                <h1 className="text-2xl inline-flex items-center font-bold">
                  GymWave
                  <img
                    className="w-20 pt-1 hidden md:block"
                    src="/gym.png"
                    alt="GymWave Logo"
                  />
                </h1>
              </Link>
            </div>

            {/* Mobile menu icons */}
            <div className="flex items-center">
              <div className="hidden md:flex lg:hidden">
                <div className="font-bold transition duration-300 pr-5">
                  {user && (
                    <div className="hover:cursor-pointer relative">
                      <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-8 rounded-full"
                        onClick={toggleProfileMenu}
                      />
                      {isProfileMenuOpen && (
                        <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                          <Link
                            to="/dashboard"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          >
                            DashBoard
                          </Link>

                          <button
                            onClick={logout}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="lg:hidden text-2xl text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <MdCancel /> : <FaBars />}
              </div>
            </div>

            {/* Sidebar for mobile */}
            <div
              className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-slate-900 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out z-50`}
            >
              <div className="p-4">
                <ul className="space-y-6 flex flex-col items-center mt-10">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.route}
                        className={({ isActive }) =>
                          `font-bold text-white ${
                            isActive ? "border-b-2 border-[#d6fb00]" : ""
                          } transition duration-300`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                  {user ? (
                    <div>
                      <div className="md:hidden">
                        <NavLink
                          to="/dashboard"
                          className={({ isActive }) =>
                            `font-bold text-white ${
                              isActive ? "border-b-2 border-[#d6fb00]" : ""
                            } transition duration-300`
                          }
                        >
                          Dashboard
                        </NavLink>
                        <div
                          onClick={logout}
                          className="px-3 py-2 mt-4 bg-red-400 text-white font-semibold"
                        >
                          Logout
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px-4 py-2 bg-red-400 text-white font-semibold rounded">
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </ul>
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex mx-auto items-center space-x-3">
              {navLinks.map((link, index) => (
                <ul key={index}>
                  <li className="mx-3">
                    <NavLink
                      to={link.route}
                      className={({ isActive }) =>
                        `font-bold text-black ${
                          isActive ? "border-b-2 border-gray-800" : ""
                        } transition duration-300`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                </ul>
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="font-bold transition duration-300">
                {user ? (
                  <div className="flex items-center hover:cursor-pointer relative">
                    <div className="pr-5" onClick={toggleProfileMenu}>
                      <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    {isProfileMenuOpen && (
                      <div className="absolute right-5 top-12 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="px-4 py-2 bg-red-400 text-white font-semibold rounded">
                    <Link to="/login">Login</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
