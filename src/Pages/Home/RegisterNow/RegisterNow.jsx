import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useRegistration from "../../../hook/useRegistration";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaPenNib,
} from "react-icons/fa";

const RegisterNow = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useRegistration();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      const form = e.target;
      const name = user?.displayName;
      const email = form.email.value;
      const phone = form.phone.value;
      const date = form.date.value;
      const text = form.text.value;
      const formInfo = { name, email, phone, date, text };

      axiosPublic.post("/registerForm", formInfo).then((res) => {
        if (res.data.insertedId) {
          refetch();
          form.reset();
          Swal.fire({
            title: "Confirm registration!",
            text: "Your request is accepted.",
            icon: "success",
            confirmButtonColor: "#052c65",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please LogIn?",
        text: "You are not login, after login than submit form!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // Reusable Input Style for Clean Look
  const inputStyle =
    "w-full bg-slate-50 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-xl py-3 pl-11 pr-4 text-[#052c65] font-semibold transition-all duration-300 outline-none shadow-sm placeholder:text-slate-300";
  const labelStyle =
    "text-[11px] font-black text-[#052c65] uppercase tracking-widest ml-1 mb-1 block";

  return (
    <div className="w-full min-h-screen bg-[#fcfcfd] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-[#052c65] text-2xl md:text-4xl font-black uppercase tracking-tighter italic">
            Ready To Get Started?
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            Our Popular Library offers a wide range of books and resources for
            all ages.
          </p>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Body */}
        <div className="bg-white rounded-[32px] shadow-2xl shadow-blue-900/5 p-6 md:p-12 border border-slate-50 overflow-hidden">
          <form id="formId" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="form-control">
                <label className={labelStyle}>First Name*</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input
                    name="name"
                    type="text"
                    placeholder="First Name"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="form-control">
                <label className={labelStyle}>Last Name*</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-control">
                <label className={labelStyle}>Candidate Email*</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input
                    name="email"
                    type="email"
                    defaultValue={user?.email}
                    placeholder="example@gmail.com"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className={labelStyle}>Candidate Phone*</label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input
                    name="phone"
                    type="number"
                    placeholder="01XXX-XXXXXX"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="form-control">
              <label className={labelStyle}>
                What&apos;s your availability date:*
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                <input
                  name="date"
                  type="date"
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            {/* Experience / Message */}
            <div className="form-control">
              <label className={labelStyle}>
                Please share your farming experience*
              </label>
              <div className="relative">
                <FaPenNib className="absolute left-4 top-5 text-slate-300" />
                <textarea
                  name="text"
                  className={`${inputStyle} h-32 md:h-40 pt-4 resize-none`}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#052c65] hover:bg-red-500 text-white font-black py-4 rounded-2xl transition-all duration-500 uppercase tracking-widest text-xs shadow-lg active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
