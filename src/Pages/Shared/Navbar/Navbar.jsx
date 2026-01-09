import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/images/logo/navLogo.jpg";
import useAuth from "../../../hook/useAuth";
import defaultUser from "../../../assets/images/logo/user.jpg";
import { useEffect, useState } from "react";
import useCarts from "../../../hook/useCarts";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [carts] = useCarts();
  const [header, setHeader] = useState(false);

  // Scroll logic for sticky header
  useEffect(() => {
    const scrollHeader = () => {
      window.scrollY >= 40 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  const handleLogOut = () => logOut().catch((err) => console.log(err));

  // Function to close drawer on mobile
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-4");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  // Professional NavLink styles
  const navItemClass = ({ isActive }) =>
    `relative text-[15px] font-bold tracking-wide transition-all duration-300 ${
      isActive
        ? "text-red-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500"
        : "text-[#052c65] hover:text-red-500"
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink onClick={closeDrawer} to="/" className={navItemClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeDrawer} to="/allBook" className={navItemClass}>
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={closeDrawer}
          to="/borrowedBook"
          className={navItemClass}
        >
          Borrowed
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeDrawer} to="/about" className={navItemClass}>
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-end z-[100]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div
        className={`drawer-content flex flex-col w-full transition-all duration-500 ${
          header
            ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
            : "bg-white border-b border-slate-100"
        }`}
      >
        {/* Navbar Main Container */}
        <div className="navbar max-w-7xl mx-auto h-20 px-4 md:px-8">
          <div className="navbar-start">
            {/* Mobile Menu Icon */}
            <label
              htmlFor="my-drawer-4"
              className="btn btn-ghost lg:hidden p-0 mr-4"
            >
              <HiMenuAlt3 className="text-3xl text-[#052c65]" />
            </label>

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={navLogo}
                alt="Logo"
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-red-500 ring-offset-2 transition-transform duration-300 group-hover:scale-105"
              />
              <h1 className="font-black uppercase text-xl tracking-tighter text-[#052c65] hidden sm:block">
                Popular <span className="text-red-500">Library</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu Items */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8 uppercase">
              {navLinks}
            </ul>
          </div>

          <div className="navbar-end gap-3 md:gap-5 items-center">
            {/* Cart Button */}
            <Link
              to="/carts"
              className="relative p-3 bg-slate-50 text-[#052c65] hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 group shadow-sm border border-slate-100"
            >
              <FaCartShopping size={20} />
              {carts?.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white group-hover:scale-110">
                  {carts.length}
                </span>
              )}
            </Link>

            {/* User Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-slate-100 ring-offset-2 hover:ring-red-500 transition-all"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || defaultUser} alt="User profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-5 z-[1] p-5 shadow-2xl menu dropdown-content bg-white rounded-3xl w-72 border border-slate-100"
              >
                <div className="flex flex-col items-center py-4 gap-2 border-b border-slate-50 mb-4">
                  <p className="font-bold text-[#052c65]">
                    {user?.displayName || "Guest Reader"}
                  </p>
                  <p className="text-xs text-slate-400 truncate w-full text-center">
                    {user?.email}
                  </p>
                </div>
                <li>
                  <Link
                    onClick={closeDrawer}
                    to="/bookingRegistration"
                    className="font-semibold p-4 hover:bg-slate-50 rounded-2xl text-[#052c65]"
                  >
                    My Bookings
                  </Link>
                </li>
                <div className="mt-4">
                  {user ? (
                    <button
                      onClick={handleLogOut}
                      className="btn btn-error btn-sm w-full rounded-xl text-white font-bold"
                    >
                      Logout Account
                    </button>
                  ) : (
                    <Link
                      to="/logIn"
                      className="btn btn-primary btn-sm w-full rounded-xl bg-[#052c65] hover:bg-[#041d42] border-none text-white font-bold transition-all"
                    >
                      Login Now
                    </Link>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Drawer-side) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu p-6 w-80 min-h-full bg-white flex flex-col">
          <div className="flex items-center justify-between mb-10 border-b pb-5">
            <h2 className="font-black text-xl text-[#052c65] uppercase tracking-tighter">
              Popular <span className="text-red-500">Library</span>
            </h2>
            <label
              htmlFor="my-drawer-4"
              className="btn btn-circle btn-ghost btn-sm text-red-500"
            >
              <FaXmark size={24} />
            </label>
          </div>

          <ul className="flex-1 space-y-6 text-base">
            {navLinks}
            <div className="divider"></div>
            <Link
              onClick={closeDrawer}
              to="/carts"
              className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="flex items-center gap-3 font-bold text-[#052c65]">
                <FaCartShopping /> <span>Shopping Cart</span>
              </div>
              <span className="badge badge-error text-white font-bold">
                {carts?.length}
              </span>
            </Link>
          </ul>

          <div className="mt-auto pt-6 border-t border-slate-100">
            {!user && (
              <Link
                to="/logIn"
                onClick={closeDrawer}
                className="btn btn-primary w-full rounded-2xl bg-[#052c65] border-none text-white"
              >
                Login to Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
