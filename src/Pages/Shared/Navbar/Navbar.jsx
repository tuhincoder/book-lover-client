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

  // Scroll logic
  useEffect(() => {
    const scrollHeader = () => {
      window.scrollY >= 40 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  const handleLogOut = () => logOut().catch((err) => console.log(err));

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-4");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  // Improved NavLink Styles with Animation
  const navItemClass = ({ isActive }) =>
    `relative text-[14px] uppercase font-bold tracking-[1px] transition-all duration-300 group ${
      isActive ? "text-red-500" : "text-[#052c65] hover:text-red-500"
    }`;

  const activeIndicator =
    "absolute left-0 -bottom-1 w-full h-0.5 bg-red-500 transform scale-x-100 transition-transform duration-300";
  const hoverIndicator =
    "absolute left-0 -bottom-1 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300";

  const navLinks = (
    <>
      {["/", "/allBook", "/borrowedBook", "/about"].map((path, index) => {
        const labels = ["Home", "All Books", "Borrowed", "About"];
        return (
          <li key={index}>
            <NavLink onClick={closeDrawer} to={path} className={navItemClass}>
              {({ isActive }) => (
                <>
                  {labels[index]}
                  <span
                    className={isActive ? activeIndicator : hoverIndicator}
                  ></span>
                </>
              )}
            </NavLink>
          </li>
        );
      })}
    </>
  );

  return (
    <div className="drawer drawer-end z-[100]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div
        className={`drawer-content flex flex-col w-full transition-all duration-500 ${
          header
            ? "fixed top-0 left-0 bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="navbar max-w-7xl mx-auto h-20 px-4 md:px-8">
          <div className="navbar-start">
            {/* Mobile Menu Icon */}
            <label
              htmlFor="my-drawer-4"
              className="lg:hidden cursor-pointer mr-4 transition-transform active:scale-90"
            >
              <HiMenuAlt3 className="text-3xl text-[#052c65]" />
            </label>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <img
                  src={navLogo}
                  alt="Logo"
                  className="w-9 h-9 md:w-11 md:h-11 rounded-xl object-cover ring-2 ring-red-500 ring-offset-2 transition-all duration-500 group-hover:rotate-[360deg]"
                />
              </div>
              <h1 className="font-black uppercase text-lg md:text-xl tracking-tighter text-[#052c65] hidden xs:block">
                Popular <span className="text-red-500">Library</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-8">{navLinks}</ul>
          </div>

          <div className="navbar-end gap-2 md:gap-4 items-center">
            {/* Cart Button */}
            <Link
              to="/carts"
              className="relative p-3 bg-slate-50 text-[#052c65] hover:bg-[#052c65] hover:text-white rounded-xl transition-all duration-300 shadow-sm border border-slate-100 group"
            >
              <FaCartShopping
                size={18}
                className="group-hover:animate-bounce"
              />
              {carts?.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
                  {carts.length}
                </span>
              )}
            </Link>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                role="button"
                className="avatar cursor-pointer"
              >
                <div className="w-10 md:w-11 rounded-full ring-2 ring-offset-2 ring-slate-100 hover:ring-red-500 transition-all">
                  <img src={user?.photoURL || defaultUser} alt="Profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-5 p-2 shadow-2xl menu dropdown-content bg-white rounded-2xl w-64 border border-slate-50 animate-in slide-in-from-top-2"
              >
                <div className="px-4 py-3 border-b border-slate-50 text-center">
                  <p className="font-bold text-[#052c65] truncate">
                    {user?.displayName || "Reader"}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate">
                    {user?.email}
                  </p>
                </div>
                <li>
                  <Link
                    to="/bookingRegistration"
                    className="py-3 font-semibold text-[#052c65] hover:bg-slate-50 rounded-xl mt-2"
                  >
                    My Bookings
                  </Link>
                </li>
                <div className="p-2">
                  {user ? (
                    <button
                      onClick={handleLogOut}
                      className="btn btn-error btn-sm w-full rounded-lg text-white font-bold border-none"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/logIn"
                      className="btn btn-primary btn-sm w-full rounded-lg bg-[#052c65] hover:bg-red-500 border-none text-white transition-all"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Sidebar) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="menu p-6 w-[280px] md:w-80 min-h-full bg-white shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-black text-xl text-[#052c65] uppercase">
              Menu
            </h2>
            <label
              htmlFor="my-drawer-4"
              className="btn btn-circle btn-ghost btn-sm text-red-500"
            >
              <FaXmark size={22} />
            </label>
          </div>
          <ul className="space-y-4">{navLinks}</ul>
          <div className="mt-auto border-t pt-6">
            <Link
              to="/carts"
              onClick={closeDrawer}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-xl mb-4"
            >
              <span className="font-bold text-[#052c65]">Cart Items</span>
              <span className="badge badge-error text-white font-bold">
                {carts?.length}
              </span>
            </Link>
            {!user && (
              <Link
                to="/logIn"
                onClick={closeDrawer}
                className="btn btn-primary w-full rounded-xl bg-[#052c65] text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
