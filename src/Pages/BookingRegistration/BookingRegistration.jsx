// import Container from "../../component/common/Container";
import useAuth from "../../hook/useAuth";
import useRegistration from "../../hook/useRegistration";
import { FaPhoneAlt, FaCalendarCheck, FaBookReader } from "react-icons/fa";

const BookingRegistration = () => {
  const [registrations, refetch, isLoading] = useRegistration();
  const { user } = useAuth();

  // Data load hote somoy nile safety check
  const lastRegistration = registrations[registrations.length - 1] || {};

  return (
    <div className="min-h-screen bg-[#fcfcfd] py-12">
      {/* <Container> */}
      <div className="flex flex-col items-center justify-center">
        {/* Profile Card Container */}
        <div className="w-full max-w-[400px] mx-auto bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 p-8 border border-slate-50 relative overflow-hidden group">
          {/* Top Decorative Banner */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#052c65] via-red-500 to-[#052c65]"></div>

          {/* User Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-125 animate-pulse"></div>
              <div className="relative group">
                <img
                  width={120}
                  height={120}
                  className="h-[120px] w-[120px] rounded-full border-4 border-white shadow-xl object-cover relative z-10"
                  src={user?.photoURL || "https://i.ibb.co/0QZCv5C/user.png"}
                  alt="user image"
                />
                <span className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-4 border-white bg-green-500 z-20"></span>
                <span className="absolute bottom-2 right-2 h-6 w-6 animate-ping rounded-full bg-green-500 z-10"></span>
              </div>
            </div>

            <div className="text-center space-y-1">
              <h1 className="text-2xl font-black text-[#052c65] uppercase tracking-tighter">
                {user?.displayName}
              </h1>
              <p className="text-[10px] font-black text-red-500 uppercase tracking-[3px] italic">
                Verified Member
              </p>
            </div>
          </div>

          {/* Stats / Info Section */}
          <div className="grid grid-cols-3 gap-4 my-8 border-y border-slate-50 py-6 ">
            <div className="text-center space-y-1">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
                <FaBookReader className="text-[#052c65]" /> Bookings
              </p>
              <p className="text-lg font-black text-[#052c65]">
                {registrations.length}
              </p>
            </div>
            <div className="text-center space-y-1 border-x border-slate-50 px-2">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
                <FaPhoneAlt className="text-red-500" /> Phone
              </p>
              <p className="text-[11px] font-bold text-slate-600 truncate">
                {lastRegistration?.phone || "N/A"}
              </p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
                <FaCalendarCheck className="text-[#052c65]" /> Date
              </p>
              <p className="text-[11px] font-bold text-slate-600 truncate">
                {lastRegistration?.date || "N/A"}
              </p>
            </div>
          </div>

          {/* Bio / Experience Section */}
          <div className="bg-slate-50 rounded-2xl p-4 mb-8">
            <p className="text-[10px] font-black text-[#052c65] uppercase tracking-widest mb-2 opacity-50 italic">
              Experience Note:
            </p>
            <p className="text-sm text-slate-500 leading-relaxed italic text-center">
              "{lastRegistration?.text || "No registration details found yet."}"
            </p>
          </div>

          {/* Action Button */}
          <button className="w-full bg-[#052c65] hover:bg-red-500 text-white font-black py-4 rounded-2xl transition-all duration-500 uppercase tracking-[2px] text-xs shadow-lg shadow-blue-900/10 active:scale-95">
            Manage Bookings
          </button>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default BookingRegistration;
