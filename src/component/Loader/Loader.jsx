import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center space-y-4">
      {/* Main Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Decorative pulse effect */}
        <div className="absolute w-24 h-24 bg-red-500/10 rounded-full animate-ping"></div>

        <HashLoader
          size={80}
          color="#052c65" // Navy Blue theme color
          loading={true}
        />
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-[#052c65] font-black uppercase tracking-[0.3em] text-xs animate-pulse">
          Loading
        </p>
        <div className="flex justify-center gap-1 mt-1">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
