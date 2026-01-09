import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhoneVolume,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import navLogo from "../../../assets/images/logo/navLogo.jpg";

const Footer = () => {
  const handleSubsCribe = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    e.target.reset();
  };

  return (
    <footer className="bg-[#052c65] text-white w-full mt-14">
      {/* Top Contact Info Bar - Full Width Background */}
      <div className="bg-[#042452] py-10 border-b border-white/5 w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Phone */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center border border-dashed border-red-500 rounded-full group-hover:bg-red-500 transition-all duration-300">
                <FaPhoneVolume className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Call Us 24/7</p>
                <h2 className="text-lg font-bold">+208-555-0112</h2>
              </div>
            </div>
            {/* 2. Email */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center border border-dashed border-red-500 rounded-full group-hover:bg-red-500 transition-all duration-300">
                <MdOutlineAttachEmail className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email Address</p>
                <h2 className="text-lg font-bold break-all">
                  popular.library@gmail.com
                </h2>
              </div>
            </div>
            {/* 3. Time */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center border border-dashed border-red-500 rounded-full group-hover:bg-red-500 transition-all duration-300">
                <IoMdTime className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Opening Hour</p>
                <h2 className="text-lg font-bold">Sun - Fri: 9 AM - 6 PM</h2>
              </div>
            </div>
            {/* 4. Location */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center border border-dashed border-red-500 rounded-full group-hover:bg-red-500 transition-all duration-300">
                <IoLocationOutline className="text-2xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Our Location</p>
                <h2 className="text-lg font-bold">Dhaka, Uttara</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Full Width Background */}
      <div className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full ring-2 ring-red-500 p-0.5 bg-white"
                  src={navLogo}
                  alt="Logo"
                />
                <p className="text-2xl font-black uppercase tracking-tighter">
                  Popular <span className="text-red-500">Library</span>
                </p>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Welcome to the Library Corner, where knowledge meets curiosity.
                Discover thousands of books and join our community.
              </p>
              <div className="flex gap-3">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500 transition-all duration-300 border border-white/10"
                    >
                      <Icon className="text-sm" />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="text-xl font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-8 h-1 bg-red-500 rounded-full"></span>
              </h6>
              <ul className="space-y-4 text-slate-400">
                {[
                  "Store List",
                  "Opening Hours",
                  "Contact Us",
                  "Return Policy",
                ].map((item) => (
                  <li key={item}>
                    <a className="hover:text-red-500 transition-colors cursor-pointer flex items-center gap-2">
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h6 className="text-xl font-bold mb-6 relative inline-block">
                Categories
                <span className="absolute bottom-0 left-0 w-8 h-1 bg-red-500 rounded-full"></span>
              </h6>
              <ul className="space-y-4 text-slate-400">
                {["History", "Novel", "Drama", "Thriller"].map((item) => (
                  <li key={item}>
                    <a className="hover:text-red-500 transition-colors cursor-pointer flex items-center gap-2">
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h6 className="text-xl font-bold mb-6 relative inline-block">
                Newsletter
                <span className="absolute bottom-0 left-0 w-8 h-1 bg-red-500 rounded-full"></span>
              </h6>
              <p className="text-slate-400 mb-6">
                Subscribe to get the latest updates and book offers.
              </p>
              <form onSubmit={handleSubsCribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-red-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar - Full Width */}
      <div className="py-6 text-center bg-[#042452] border-t border-white/5 w-full">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-bold">Popular Library</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
