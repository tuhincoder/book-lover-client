import { MdOutlineMail, MdOutlinePhoneForwarded } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaSignOutAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../hook/useAuth";

const TopNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full bg-[#052c65] text-white/90 py-2.5 px-4 md:px-10 transition-all duration-500 ease-in-out z-[100] ${
        isVisible
          ? "opacity-100 translate-y-0 h-auto"
          : "opacity-0 -translate-y-full h-0 overflow-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Contact Info */}
        <div className="hidden sm:flex items-center gap-6 text-[13px] font-medium uppercase tracking-wider">
          <div className="flex gap-2 items-center hover:text-white transition-colors cursor-pointer">
            <MdOutlinePhoneForwarded className="text-sky-400 text-lg" />
            <span>+0081537847</span>
          </div>
          <div className="hidden lg:flex gap-2 items-center border-l border-white/20 pl-6 cursor-pointer">
            <MdOutlineMail className="text-sky-400 text-lg" />
            <span>popular.library@gmail.com</span>
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-5 ml-auto sm:ml-0">
          <Link
            to={"/liveChat"}
            className="flex gap-2 items-center text-[13px] font-bold bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-all"
          >
            <IoChatbubblesSharp className="text-sky-400" />
            <span className="hidden xs:block">Live Chat</span>
          </Link>

          <div className="h-4 w-[1px] bg-white/20 mx-1"></div>

          <div className="flex items-center gap-4 text-[13px] font-bold">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:block text-right">
                  <p className="text-[10px] text-sky-400 leading-none">
                    Welcome,
                  </p>
                  <p className="text-xs">{user?.displayName?.split(" ")[0]}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <FaSignOutAlt /> <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <FaLock className="text-[11px]" />
                <span>LOGIN</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
