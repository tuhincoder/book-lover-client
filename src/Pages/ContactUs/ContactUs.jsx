import { toast } from "react-toastify";
import Container from "../../component/common/Container";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      toast.success("Thank You for connecting with us!");
      setInputValue("");
    }
  };

  return (
    <Container>
      <div className="py-16">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
          {/* Top Header Part */}
          <div className="bg-[#052c65] p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Contact Our <span className="text-red-500">Dealer</span>
            </h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto font-medium">
              For any communication requests or library inquiries, please reach
              out to us through the channels below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 -mt-10 relative z-10">
            {/* Phone */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-b-4 border-red-500 text-center space-y-3">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-red-500">
                <FaPhoneAlt />
              </div>
              <h4 className="font-bold text-[#052c65] uppercase tracking-wider">
                Call Us
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                +844 123 456 78 <br /> +844 123 456 79
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-b-4 border-[#052c65] text-center space-y-3">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-[#052c65]">
                <FaEnvelope />
              </div>
              <h4 className="font-bold text-[#052c65] uppercase tracking-wider">
                Email Us
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                Contact@yoursite.com <br /> support@library.com
              </p>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-b-4 border-red-500 text-center space-y-3">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-red-500">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-bold text-[#052c65] uppercase tracking-wider">
                Visit Us
              </h4>
              <p className="text-slate-500 text-sm font-medium">
                Bookstore, CA 59246 <br /> Dhaka Uttara, Bangladesh
              </p>
            </div>
          </div>

          {/* Newsletter / Form Part */}
          <div className="p-10 md:p-20">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#052c65]">
                  Send us a Quick Message
                </h3>
                <p className="text-slate-400">
                  Enter your email and we'll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="relative group">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="relative w-full">
                    <input
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 outline-none focus:border-red-500 focus:bg-white transition-all duration-300 shadow-inner"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      type="email"
                      placeholder="yourname@email.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#052c65] hover:bg-red-600 text-white font-black px-10 py-4 rounded-2xl transition-all duration-500 shadow-lg active:scale-95 uppercase tracking-widest"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
