import { Link, NavLink } from "react-router-dom";
import snipeLogo from "../../assets/icon.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">
      {/* navbar goes here */}
      <nav
        className="w-full flex h-14  px-4 lg:px-6 py-2.5 justify-between md:px-4 items-center"
        style={{ backgroundColor: "#0B0121" }}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <div className="items-center hidden px-2 py-2 lg:order-2 md:block">
            <Link
              to="https://dash.staging.snipeads.com/"
              className="text-white
               hover:bg-white focus:ring-4
                focus:ring-gray-300 
                font-medium rounded-full 
                text-sm px-4 lg:px-5 py-2 lg:py-2.5 
                mr-2 focus:outline-none 
                 hover:text-black"
            >
              Login
            </Link>
            <Link
              to="https://dash.staging.snipeads.com/register"
              className="text-white hover:bg-gray-50 focus:ring-4
               focus:ring-gray-300 font-medium rounded-full 
               text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none 
                hover:text-black"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden">
            <a className="text-4xl" href="#">
              &#8801;
            </a>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 md:flex">
              {/* <li>
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
              </li> */}
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
                <Link to="/home" className="flex items-center">
                  <img src={snipeLogo} className="mr-3 h-1/2" alt="logo" />
                </Link>
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
      {/* navbar End here */}
    </header>
  );
}
