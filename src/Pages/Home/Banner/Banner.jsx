import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";

const Banner = () => {
  const slides = [
    {
      id: "slide1",
      prev: "#slide3",
      next: "#slide2",
      image: banner1,
      title: "Find Books For <br/> All Ages",
      sub: "Choose Your Book",
    },
    {
      id: "slide2",
      prev: "#slide1",
      next: "#slide3",
      image: banner2,
      title: "Knowledge is <br/> Power",
      sub: "Learn Every Day",
    },
    {
      id: "slide3",
      prev: "#slide2",
      next: "#slide1",
      image: banner3,
      title: "Digital & Physical <br/> Resources",
      sub: "Unlimited Access",
    },
  ];

  return (
    <div className="w-full px-0">
      <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px]">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full"
          >
            {/* Image Container */}
            <div className="w-full h-full relative">
              <img
                src={slide.image}
                className="w-full h-full object-cover rounded-none"
                alt="Banner"
              />
              {/* Overlay - Darker for mobile visibility */}
              <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-[#052c65]/80 md:to-transparent"></div>
            </div>

            {/* Text Content - Positioned center on mobile, left on desktop */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 sm:px-10 md:px-20">
              <div className="text-center md:text-left text-white max-w-xl">
                <h4 className="text-red-500 font-bold uppercase text-xs sm:text-sm md:text-lg mb-2 tracking-widest">
                  {slide.sub}
                </h4>
                <h1
                  className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight mb-4"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></h1>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Link
                    to="/allBook"
                    className="btn btn-error btn-sm md:btn-md text-white font-bold border-none px-6 rounded-lg"
                  >
                    Discover Now
                  </Link>
                  <button className="btn btn-outline btn-sm md:btn-md text-white hover:bg-white hover:text-[#052c65] px-6 rounded-lg hidden sm:flex">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Hidden on very small screens, shown from SM */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 md:bottom-8 md:right-12 md:left-auto md:top-auto md:translate-y-0 gap-2">
              <a
                href={slide.prev}
                className="btn btn-circle btn-xs sm:btn-sm md:btn-md bg-white/30 border-none text-white hover:bg-red-500 transition-all"
              >
                ❮
              </a>
              <a
                href={slide.next}
                className="btn btn-circle btn-xs sm:btn-sm md:btn-md bg-red-500 border-none text-white hover:bg-[#052c65] transition-all"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
