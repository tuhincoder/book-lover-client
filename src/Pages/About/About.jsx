import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import animationImg from "../../assets/images/Animation - 1718107566435.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { FaBookOpen, FaUsers, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const [fold, setFold] = useState(true);

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-20">
      <Container>
        {/* Header Section */}
        <div className="pt-10">
          <HeaderText
            Heading={"About Our Library"}
            subHeading={"Your Gateway to Infinite Knowledge"}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12 items-center">
          {/* Left Side: Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            {/* Welcome Heading */}
            <div className="space-y-3 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-black text-[#052c65] uppercase tracking-tighter leading-tight">
                Welcome to <br />
                <span className="text-red-500 underline decoration-blue-200 underline-offset-8">
                  Our Popular Library
                </span>
              </h1>
              <p className="text-slate-500 font-medium text-lg italic">
                "Empowering minds, one page at a time."
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <FaUsers className="text-red-500 text-3xl mb-4" />
                <h3 className="font-black text-[#052c65] text-sm uppercase tracking-widest mb-2">
                  Our Mission
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We provide a welcoming space where individuals of all ages can
                  explore, learn, and grow.
                </p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <FaBookOpen className="text-[#052c65] text-3xl mb-4" />
                <h3 className="font-black text-red-500 text-sm uppercase tracking-widest mb-2">
                  Collection
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  From gripping thrillers to profound non-fiction, our shelves
                  are stocked for every reader.
                </p>
              </div>
            </div>

            {/* Main Description */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
              <p>
                <strong className="text-[#052c65]">Public Library Role:</strong>{" "}
                It's more than just a place to borrow books; it's a cornerstone
                of our community. We strive to foster a love for reading and
                lifelong learning, support educational endeavors, and provide a
                gathering place for cultural activities.
              </p>

              <div className="bg-[#052c65] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
                <FaLaptopCode className="absolute right-[-10px] bottom-[-10px] text-8xl text-white/5 rotate-12" />
                <h4 className="font-black uppercase tracking-widest text-xs text-red-400 mb-3">
                  Technology & System
                </h4>
                <h3 className="text-xl font-bold mb-3 italic">
                  How our Management System works?
                </h3>
                <p className="text-white/80 text-sm">
                  Using advanced systems like Koha, we automate routine tasks.
                  Librarians can manage cataloging and circulation while users
                  can search via OPAC, place holds, and track history
                  effortlessly.
                </p>
              </div>

              {/* Foldable Section */}
              <div className="p-4 border-l-4 border-red-500 bg-red-50/30 rounded-r-xl">
                <p className="font-semibold text-slate-700">
                  A library is a collection of books and other media accessible
                  for its members...
                  {fold ? (
                    <span
                      onClick={() => setFold(!fold)}
                      className="text-red-500 font-black cursor-pointer ml-2 hover:underline"
                    >
                      Read more...
                    </span>
                  ) : (
                    <>
                      <span>
                        {" "}
                        including digital soft copies, virtual spaces, and
                        physical hard copies across all platforms.
                      </span>
                      <span
                        onClick={() => setFold(!fold)}
                        className="block text-red-500 font-black cursor-pointer mt-2"
                      >
                        Read Less
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Animation */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl transform scale-75"></div>
              <div className="relative z-10">
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
      </Container>
    </div>
  );
};

export default About;
