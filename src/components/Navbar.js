import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <div className="flex flex-col items-center min-w-[220px] mt-10 lg:mx-[50px] lg:space-y-5 space-y-3">
      <img src={logo} alt="Logo" />
      <div className="flex flex-col font-raleway font-medium lg:mt-5 text-darkBeige text-3xl text-center lg:space-y-5 space-y-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `lg:-mb-4 -mb-2 ${isActive ? "text-darkBrown" : "hover:text-brown"}`
          }
        >
          Portfolio
        </NavLink>
        <div className="flex flex-col text-base">
          <NavLink
            to="/web"
            className={({ isActive }) =>
              `${isActive ? "text-darkBrown" : "hover:text-brown"}`
            }
          >
            Web Development (WD)
          </NavLink>
          <NavLink
            to="/management"
            className={({ isActive }) =>
              `${isActive ? "text-darkBrown" : "hover:text-brown"}`
            }
          >
            Project Management (PM)
          </NavLink>
          <NavLink
            to="/design"
            className={({ isActive }) =>
              `${isActive ? "text-darkBrown" : "hover:text-brown"}`
            }
          >
            Design Project (DP)
          </NavLink>
        </div>
        <NavLink
          to="/marketing"
          className={({ isActive }) =>
            `${isActive ? "text-darkBrown" : "hover:text-brown"}`
          }
        >
          Marketing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-darkBrown" : "hover:text-brown"}`
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
