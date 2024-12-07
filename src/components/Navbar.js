import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <div className="flex flex-col items-center min-w-[220px] mt-10 lg:mx-[50px] lg:space-y-5 space-y-3 lg:fixed">
      <img src={logo} alt="Logo"  className="lg:h-[130px] h-[70px]"/>
      <div className="flex flex-col font-raleway font-medium lg:mt-5 text-darkBeige lg:text-3xl text-2xl text-center lg:space-y-5 space-y-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `lg:-mb-4 -mb-2 ${isActive ? "text-darkBrown font-semibold" : "hover:text-brown"}`
          }
        >
          portfolio
        </NavLink>
        <div className="flex flex-col lg:text-lg text-base">
          <NavLink
            to="/web"
            className={({ isActive }) =>
              `${isActive ? "text-darkBrown font-semibold" : "hover:text-brown"}`
            }
          >
            web development (wd)
          </NavLink>
          <NavLink
            to="/management"
            className={({ isActive }) =>
              `${isActive ? "text-darkBrown font-semibold" : "hover:text-brown"}`
            }
          >
            project management (pm)
          </NavLink>
          <NavLink
            to="/design"
            className={({ isActive }) =>
              `${isActive ? "text-darkBrown font-semibold" : "hover:text-brown"}`
            }
          >
            design project (dp)
          </NavLink>
        </div>
        <NavLink
          to="/marketing"
          className={({ isActive }) =>
            `${isActive ? "text-darkBrown font-semibold" : "hover:text-brown"}`
          }
        >
          marketing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-darkBrown font-semibold" : "hover:text-brown"}`
          }
        >
          about
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
