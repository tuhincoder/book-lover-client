import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../assets/images/login/login.svg";
import useAuth from "../../hook/useAuth";
import { FaGoogle, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, googleLogin } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const toastId = toast.loading("Creating account...");

    createUser(email, password)
      .then((result) => {
        toast.success("Registration Successful!", { id: toastId });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully registered with Google");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const inputClass =
    "w-full bg-slate-50 border-none rounded-xl py-3.5 pl-11 pr-4 text-[#052c65] font-semibold focus:ring-2 focus:ring-red-500 outline-none transition-all placeholder:text-slate-300 shadow-inner";

  return (
    <div className="min-h-screen bg-[#fcfcfd] flex items-center justify-center p-5 md:p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 overflow-hidden border border-slate-100">
        {/* --- Left Side: Welcome Info --- */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-[#052c65] p-12 h-full text-white space-y-6 relative overflow-hidden order-2">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">
              Join Our Community
            </h2>
            <p className="text-blue-200 font-medium">
              Create an account to start your journey through thousands of
              stories and knowledge.
            </p>
          </div>
          <img
            src={registerImg}
            alt="Register Illustration"
            className="w-full max-w-md relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* --- Right Side: Register Form --- */}
        <div className="p-8 md:p-16 lg:p-20 order-1">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-black text-[#052c65] uppercase tracking-tighter mb-2">
              Register Now!
            </h1>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[3px]">
              Start your reading journey today
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#052c65] uppercase tracking-widest ml-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#052c65] uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                <input
                  type="email"
                  name="email"
                  placeholder="mail@example.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#052c65] uppercase tracking-widest ml-1">
                Create Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#052c65] hover:bg-red-500 text-white font-black py-4 rounded-xl transition-all duration-500 uppercase tracking-[2px] text-xs shadow-lg shadow-blue-900/20 active:scale-95 mt-4"
            >
              Create Account
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 text-slate-200">
              <div className="h-[1px] bg-slate-100 flex-1"></div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest text-center">
                Or Register With
              </span>
              <div className="h-[1px] bg-slate-100 flex-1"></div>
            </div>

            <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:border-red-500 hover:bg-red-50 text-[#052c65] font-black py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Sign up with Google
            </button>
          </div>

          {/* Footer */}
          <p className="mt-10 text-center text-slate-400 font-bold text-xs uppercase tracking-widest">
            Already have an account?
            <Link
              to="/login"
              className="text-red-500 ml-2 hover:underline decoration-2 underline-offset-4 tracking-tighter text-sm italic"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
