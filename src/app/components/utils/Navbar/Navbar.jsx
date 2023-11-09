import React from "react";
import { Link, NavLink } from "react-router-dom";
import Valuna from "../../../assets/imgs/logo/Valuna.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-white mb-3 drop-shadow-md shadow-blue-300">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img className="h-14 w-16 md:h-20 md:w-24" src={Valuna} alt="" />
            <button
              className="text-white  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-black focus:text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex fade-enter fade-enter-active" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:bg-blue-500 hover:rounded-lg hover:text-white ${
                    isActive ? "bg-blue-500 rounded-lg text-white" : ""
                  }`
                }
              >
                <li className="nav-item">
                  <a className="">
                    <span className="text-md lg:text-lg  ">Inicio</span>
                  </a>
                </li>
              </NavLink>
              <NavLink
                exact
                to="/nosotros"
                className={({ isActive }) =>
                  `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:bg-blue-500 hover:rounded-lg hover:text-white ${
                    isActive ? "bg-blue-500 rounded-lg text-white" : ""
                  }`
                }
              >
                <li className="nav-item">
                  <a className="">
                    <span className="text-md lg:text-lg  ">NOSOTROS</span>
                  </a>
                </li>
              </NavLink>
              <NavLink
                exact
                to="/servicios"
                className={({ isActive }) =>
                  `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:bg-blue-500 hover:rounded-lg hover:text-white ${
                    isActive ? "bg-blue-500 rounded-lg text-white" : ""
                  }`
                }
              >
                <li className="nav-item">
                  <a className="">
                    <span className="text-md lg:text-lg  ">SERVICIOS</span>
                  </a>
                </li>
              </NavLink>
              <NavLink
                exact
                to="/contacto"
                className={({ isActive }) =>
                  `px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:bg-blue-500 hover:rounded-lg hover:text-white ${
                    isActive ? "bg-blue-500 rounded-lg text-white" : ""
                  }`
                }
              >
                <li className="nav-item">
                  <a className="">
                    <span className="text-md lg:text-lg  ">Contacto</span>
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
