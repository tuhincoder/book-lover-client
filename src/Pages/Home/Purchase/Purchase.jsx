import Marquee from "react-fast-marquee";
// import Container from "../../../component/common/Container";

const Purchase = () => {
  return (
    // <Container>
    <div className="">
      <div className="relative bg-gradient-to-r from-red-600 to-red-500 mt-8 rounded-3xl h-[150px] md:h-[180px] w-full flex items-center overflow-hidden shadow-xl border-4 border-white shadow-red-200">
        {/* Background Decorative Circles */}
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

        <Marquee speed={80} gradient={false} pauseOnHover={true}>
          <div className="flex items-center gap-10 overflow-hidden">
            <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter ml-10">
              Special Offer:{" "}
              <span className="text-yellow-300">Get 30% OFF</span>
              <span className="mx-6 text-white/50">|</span>
              On Orders Over{" "}
              <span className="text-slate-900 bg-white px-4 py-1 rounded-full">
                $299.00
              </span>
            </h1>

            {/* Replicating the text for a seamless loop */}
            <h1 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Special Offer:{" "}
              <span className="text-yellow-300">Get 30% OFF</span>
              <span className="mx-6 text-white/50">|</span>
              On Orders Over{" "}
              <span className="text-slate-900 bg-white px-4 py-1 rounded-full">
                $299.00
              </span>
            </h1>
          </div>
        </Marquee>
      </div>
    </div>
    // </Container>
  );
};

export default Purchase;
