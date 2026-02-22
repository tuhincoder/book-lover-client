// import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import animationImg from "../../assets/images/Animation - 1718107566435.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { FaBookOpen, FaUsers, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const [fold, setFold] = useState(true);

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Wrapper: Mobile e px-4, Desktop e px-8 
          max-w-7xl use kora hoyeche jate ultra-wide screen e content majhkhan-e thake.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header Section */}
        <div className="pt-10 md:pt-16">
          <HeaderText
            Heading={"About Our Library"}
            subHeading={"Your Gateway to Infinite Knowledge"}
          />
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-12 items-center">
          {/* Left Side: Content (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="flex-1 space-y-8 order-2 lg:order-1 w-full">
            {/* Welcome Heading */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#052c65] uppercase tracking-tight leading-[1.1]">
                Welcome to <br />
                <span className="text-red-500 inline-block mt-2 underline decoration-blue-200 underline-offset-8">
                  Our Popular Library
                </span>
              </h1>
              <p className="text-slate-500 font-medium text-lg italic">
                "Empowering minds, one page at a time."
              </p>
            </div>

            {/* Feature Blocks (Responsive Grid: 1 col on mobile, 2 col on tablet/desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
              <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-red-50 w-14 h-14 flex items-center justify-center rounded-2xl mb-5 group-hover:bg-red-500 transition-colors">
                  <FaUsers className="text-red-500 text-2xl group-hover:text-white" />
                </div>
                <h3 className="font-black text-[#052c65] text-sm uppercase tracking-widest mb-2">
                  Our Mission
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We provide a welcoming space where individuals of all ages can
                  explore, learn, and grow together.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-50 w-14 h-14 flex items-center justify-center rounded-2xl mb-5 group-hover:bg-[#052c65] transition-colors">
                  <FaBookOpen className="text-[#052c65] text-2xl group-hover:text-white" />
                </div>
                <h3 className="font-black text-red-500 text-sm uppercase tracking-widest mb-2">
                  Collection
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  From gripping thrillers to profound non-fiction, our shelves
                  are stocked for every curious mind.
                </p>
              </div>
            </div>

            {/* Main Description */}
            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p className="text-center lg:text-justify">
                <strong className="text-[#052c65] font-bold text-lg">
                  Public Library Role:
                </strong>{" "}
                It's more than just a place to borrow books; it's a cornerstone
                of our community. We strive to foster a love for reading and
                lifelong learning.
              </p>

              {/* Technology Card - Fully Responsive Padding */}
              <div className="bg-[#052c65] text-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <FaLaptopCode className="absolute right-[-10px] bottom-[-10px] text-9xl text-white/5 rotate-12 group-hover:scale-110 transition-transform" />
                <div className="relative z-10">
                  <h4 className="font-black uppercase tracking-widest text-[10px] text-red-400 mb-3">
                    Technology & System
                  </h4>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 italic">
                    Smart Management System
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    Using advanced systems like Koha, we automate routine tasks.
                    Librarians manage cataloging while users search via OPAC,
                    place holds, and track history effortlessly.
                  </p>
                </div>
              </div>

              {/* Foldable Section */}
              <div className="p-5 border-l-8 border-red-500 bg-red-50/50 rounded-r-2xl transition-all">
                <p className="font-medium text-slate-700 text-sm md:text-base">
                  A library is a collection of books and other media accessible
                  for its members...
                  {fold ? (
                    <button
                      onClick={() => setFold(!fold)}
                      className="text-red-600 font-bold cursor-pointer ml-2 hover:text-red-700 hover:underline transition-all"
                    >
                      Read more
                    </button>
                  ) : (
                    <>
                      <span className="animate-in fade-in duration-500">
                        {" "}
                        including digital soft copies, virtual spaces, and
                        physical hard copies across all platforms worldwide.
                      </span>
                      <button
                        onClick={() => setFold(!fold)}
                        className="block text-red-600 font-bold cursor-pointer mt-3 bg-red-100 px-3 py-1 rounded-lg text-xs"
                      >
                        Read Less
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Animation (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="flex-1 order-1 lg:order-2 w-full flex justify-center items-center">
            <div className="relative w-full max-w-[300px] md:max-w-[450px] lg:max-w-full">
              {/* Decorative Glow Background */}
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-[80px] transform scale-90"></div>
              <div className="relative z-10 hover:scale-105 transition-transform duration-500">
                <Lottie
                  animationData={animationImg}
                  loop={true}
                  autoPlay={true}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
