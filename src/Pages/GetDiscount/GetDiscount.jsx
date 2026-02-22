// import Container from "../../component/common/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import disCountImg from "../../assets/images/bookDetails/discountbg.png";
import { Link } from "react-router-dom";

const GetDiscount = () => {
  return (
    // <Container>
    <div className="pt-10 ">
      <div
        className="bg-[#052c65] relative rounded-[30px] md:rounded-[50px] overflow-hidden min-h-[350px] flex items-center shadow-2xl transition-all duration-500 hover:shadow-red-200/20"
        style={{
          backgroundImage: `url(${disCountImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "contain", // Apnar CSS width: 200px er poriborte contain beshi responsive
        }}
      >
        {/* Dark Overlay for Mobile - Jate image-er upore text porha jay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052c65] via-[#052c65]/80 to-transparent md:from-[#052c65] md:via-[#052c65]/40 md:to-transparent"></div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-12">
          <div className="max-w-2xl text-center md:text-left space-y-4 md:space-y-6">
            <div className="inline-block bg-red-500 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-2">
              Seasonal Offer
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] uppercase tracking-tighter">
              Get <span className="text-red-500">25% Discount</span> <br />
              <span className="text-slate-300">In All Categories</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-lg font-medium max-w-md mx-auto md:mx-0">
              Grab your favorite books now at a discounted price. Limited time
              only!
            </p>

            <div className="pt-4">
              <Link to="/shopping" className="inline-block w-full md:w-auto">
                <button className="flex items-center justify-center gap-3 w-full md:w-auto bg-red-500 text-white font-bold px-10 py-4 rounded-2xl hover:bg-white hover:text-[#052c65] transition-all duration-500 shadow-lg group">
                  Shop Now
                  <FaArrowRightLong className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Left side pattern (Optional) */}
        <div className="absolute left-0 bottom-0 w-24 h-24 bg-red-500/10 rounded-tr-[100px]"></div>
      </div>
    </div>
    // </Container>
  );
};

export default GetDiscount;
