import "react-toastify/dist/ReactToastify.css";
import { FaPhoneVolume, FaEnvelopeOpenText } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const LiveChat = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for connecting with us! We will reach out soon.");
    e.target.reset();
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#052c65] font-serif mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#052c65] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our library services or need help finding a
            book? Our team is here to assist you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#052c65] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-8 relative z-10">
                {/* Phone */}
                <div className="flex items-center gap-5 group">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-all">
                    <FaPhoneVolume className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Call Us 24/7</p>
                    <h4 className="text-lg font-semibold">+208-555-0112</h4>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 group">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-all">
                    <FaEnvelopeOpenText className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email Address</p>
                    <h4 className="text-lg font-semibold break-all">
                      popular.library@gmail.com
                    </h4>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-5 group">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-all">
                    <IoMdTime className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Opening Hours</p>
                    <h4 className="text-lg font-semibold">
                      Sun - Fri: 9 AM - 6 PM
                    </h4>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-5 group">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition-all">
                    <IoLocationOutline className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Our Location</p>
                    <h4 className="text-lg font-semibold">
                      Uttara, Dhaka, Bangladesh
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Ready To Get Started?
            </h3>
            <p className="text-gray-500 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">
                      Full Name
                    </span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-[#052c65] transition-all h-14"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">
                      Email Address
                    </span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-[#052c65] transition-all h-14"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    Your Message
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full bg-gray-50 focus:bg-white focus:border-[#052c65] transition-all h-40"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn w-full md:w-auto px-12 h-14 bg-[#052c65] hover:bg-[#0a3d8a] text-white border-none rounded-xl text-lg font-semibold transition-transform active:scale-95 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChat;
