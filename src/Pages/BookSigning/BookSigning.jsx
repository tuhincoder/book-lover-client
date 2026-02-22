import { Link } from "react-router-dom";
// import Container from "../../component/common/Container";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const BookSigning = () => {
  return (
    // <Container>
    <div className="pt-10">
      <div className="bg-[#052c65] min-h-[400px] p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl border-b-8 border-red-500">
        {/* Background Subtle Design Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>

        {/* Section Header */}
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Book <span className="text-red-500">Signing</span> Event
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-center ">
          {/* When Section */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="bg-red-500 p-4 rounded-full text-white shadow-lg shadow-red-500/20">
              <FaClock size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">
              When
            </h3>
            <p className="text-slate-300 font-medium">
              8 AM - 6 PM <br />
              <span className="text-red-400 font-bold">Mon - Sat</span>
            </p>
          </div>

          {/* Next Event / Register Section */}
          <div className="flex flex-col items-center text-center space-y-6 py-6 border-y md:border-y-0 md:border-x border-white/10">
            <h3 className="text-3xl font-black text-white uppercase">
              Next Event
            </h3>
            <div className="flex items-center gap-4 w-full justify-center">
              <div className="h-[1px] bg-white/20 w-10"></div>
              <span className="text-red-500 font-black italic">Hurry Up!</span>
              <div className="h-[1px] bg-white/20 w-10"></div>
            </div>
            <Link
              to="/registerNow"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-red-500 rounded-2xl hover:bg-red-600 shadow-xl shadow-red-500/30 hover:scale-105 active:scale-95"
            >
              <FaCalendarAlt className="mr-2" />
              Register Now
            </Link>
          </div>

          {/* Where Section */}
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="bg-red-500 p-4 rounded-full text-white shadow-lg shadow-red-500/20">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">
              Where
            </h3>
            <p className="text-slate-300 font-medium leading-relaxed">
              Bookstore, CA 59246, <br />
              Dhaka Uttara, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default BookSigning;
