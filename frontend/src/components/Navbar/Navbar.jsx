import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out!");
    navigate('/login')
  };


  return (
    <div className="bg-white shadow-md">
      {/* Logo and Navigation Links */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          {/* <img src="https://images.pexels.com/photos/5960536/pexels-photo-5960536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo" className="w-12 h-12" /> */}
          <h2 className="text-3xl font-semibold text-orange-600">
            University X
          </h2>
          
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 mr-3 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
            {/* <li>
              <NavLink
                to={`/dashboard/`}  
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/dashboard/:id/timetable"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Timetable
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li> */}
            {/* Logout Button */}
            <li>
              <Link
                to="#"
                onClick={handleLogout}
                className="block py-2 pr-4 pl-3 text-white bg-orange-600 hover:bg-orange-700 rounded-md duration-200"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
