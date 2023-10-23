import { Link, NavLink } from "react-router-dom";
import snipeLogo from "../../assets/icon.png";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav
        className="  px-4 lg:px-6 py-2.5"
        style={{ backgroundColor: "#0B0121" }}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={snipeLogo} className="mr-3 h-1/2" alt="logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  hover:text-black"
            >
              Login
            </Link>
            <Link
              to="#"
              className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  hover:text-black"
            >
              Register
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  // eslint-disable-next-line no-unused-vars
                  className={({ isActive }) =>
                    ` text-white block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-`
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
