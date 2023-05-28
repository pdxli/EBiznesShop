import { Link, NavLink } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-background py-4 px-6 sm:px-10 md:px-20 flex items-center">
      <div className="items-center hidden sm:flex">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={70}
            fill={"none"}
            className="hover:translate-y-[-5px] transition-all duration-100 ease-in cursor-pointer"
          />
        </Link>
      </div>
      <ul
        className={`flex justify-between w-full sm:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 mx-auto sm:ml-auto sm:mr-0 font-boldsm:px-3 `}
      >
        <li className="text-text flex items-center">
          <NavLink
            className={({ isActive }) =>
              `hover:translate-y-[-2px] transition-all duration-200 ease-in ${
                isActive
                  ? " bg-primary px-2 py-2 rounded-lg hover:shadow-3xl text-background"
                  : ""
              }`
            }
            to="/"
          >
            Strona gówna
          </NavLink>
        </li>
        <li className="text-text flex items-center">
          <NavLink
            className={({ isActive }) =>
              `hover:translate-y-[-2px] transition-all duration-200 ease-in ${
                isActive
                  ? " bg-primary px-2 py-2 rounded-lg hover:shadow-3xl text-background"
                  : ""
              }`
            }
            to="/offers"
          >
            Oferta
          </NavLink>
        </li>
        <li className="text-text flex items-center">
          <NavLink
            className={({ isActive }) =>
              `hover:translate-y-[-2px] transition-all duration-200 ease-in ${
                isActive
                  ? " bg-primary px-2 py-2 rounded-lg hover:shadow-3xl text-background"
                  : ""
              }`
            }
            to="/information"
          >
            Informacje
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
