import { Link, NavLink } from "react-router-dom";
import snipeLogo from "../../assets/icon.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav
        className="  px-4 lg:px-6 py-2.5"
        style={{ backgroundColor: "#0B0121" }}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  hover:text-black"
            >
              Login
            </Link>
            <Link
              to="#"
              className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  hover:text-black"
            >
              Register
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    ` text-white block 
                    ${isActive ? "hover:text-white" : " hover:bg-pink-500"}
                    py-2 pr-4 pl-3 duration-200 border-b
                     border-gray-100 hover:bg-p-700 hover:bg-pink-500 `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/location"
                  className={({ isActive }) =>
                    ` text-white block 
                    ${isActive ? "hover:text-white" : " hover:bg-pink-500"}
                    py-2 pr-4 pl-3 duration-200 border-b
                     border-gray-100 hover:bg-p-700 hover:bg-pink-500 `
                  }
                >
                  Location
                </NavLink>
              </li>
              <li>
                <Link to="/" className="flex items-center">
                  <img src={snipeLogo} className="mr-3 h-1/2" alt="logo" />
                </Link>
              </li>
              <li>
                <NavLink
                  to="/campaigns"
                  className={({ isActive }) =>
                    ` text-white block 
                    ${isActive ? "hover:text-white" : " hover:bg-pink-500"}
                    py-2 pr-4 pl-3 duration-200 border-b
                     border-gray-100 hover:bg-p-700 hover:bg-pink-500 `
                  }
                >
                  Campaigns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/screens"
                  className={({ isActive }) =>
                    ` text-white block 
                    ${isActive ? "hover:text-white" : " hover:bg-pink-500"}
                    py-2 pr-4 pl-3 duration-200 border-b
                     border-gray-100 hover:bg-p-700 hover:bg-pink-500 `
                  }
                >
                  Screens
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    ` text-white block 
                    ${isActive ? "hover:text-white" : " hover:bg-pink-500"}
                    py-2 pr-4 pl-3 duration-200 border-b
                     border-gray-100 hover:bg-p-700 hover:bg-pink-500 `
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
