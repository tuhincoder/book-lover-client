import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBookmark,
  FaRegFileAlt,
} from "react-icons/fa";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import OpenModal from "../../../component/OpenModal";
import Container from "../../../component/common/Container";

const BookDetails = () => {
  const details = useLoaderData();
  const {
    _id,
    image,
    name,
    description,
    rating,
    price,
    category,
    author_name,
  } = details;

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Dynamic Header Section with Back Button */}
      <div className="bg-[#052c65] pt-20 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <Container>
          <Link
            to="/"
            className="flex items-center gap-2 text-white/70 hover:text-red-400 transition-colors mb-6 group w-fit"
          >
            <HiOutlineArrowNarrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Back to Gallery
            </span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter max-w-3xl">
            {name}
          </h1>
        </Container>
      </div>

      <Container>
        <div className="relative -mt-32">
          <div className="bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden border border-white">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section: Minimal & Elegant */}
              <div className="lg:w-[40%] bg-[#f1f5f9] p-10 md:p-16 flex flex-col items-center">
                <div className="sticky top-10">
                  <div className="relative group">
                    <img
                      className="w-full max-w-[320px] rounded-xl shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] transform group-hover:-rotate-2 transition-all duration-700"
                      src={image}
                      alt={name}
                    />
                    <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                      <FaBookmark className="text-red-500 text-xl" />
                    </div>
                  </div>
                  {/* Visual Stats below image */}
                  <div className="mt-12 flex justify-center gap-10 border-t border-slate-200 pt-8">
                    <div className="text-center">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Rating
                      </p>
                      <p className="text-xl font-black text-[#052c65]">
                        {rating}/5
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Reviews
                      </p>
                      <p className="text-xl font-black text-[#052c65]">1.2k</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Section: Clean & Spaced */}
              <div className="lg:w-[60%] p-8 md:p-16 bg-white">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-red-50 text-red-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                      {category || "New Arrival"}
                    </span>
                    <span className="text-slate-300">|</span>
                    <p className="text-[#052c65] font-bold">
                      By{" "}
                      <span className="underline decoration-red-500 underline-offset-4">
                        {author_name || "Unknown Author"}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-baseline gap-4 mb-8">
                    <h2 className="text-5xl font-black text-[#052c65] tracking-tighter">
                      ${price || "450"}
                    </h2>
                    <span className="text-2xl text-slate-300 line-through font-medium">
                      $950
                    </span>
                  </div>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaRegFileAlt className="text-red-500" />
                      <h4 className="text-sm font-black uppercase text-[#052c65] tracking-widest">
                        Story Synopsis
                      </h4>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                      {description}
                    </p>
                  </div>

                  {/* Feature Icons Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 bg-slate-50 rounded-3xl mb-10">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Condition
                      </p>
                      <p className="text-sm font-bold text-[#052c65]">
                        Brand New
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Shipping
                      </p>
                      <p className="text-sm font-bold text-green-600">
                        Free Worldwide
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Bonus
                      </p>
                      <p className="text-sm font-bold text-[#052c65]">
                        Bookmark Inc.
                      </p>
                    </div>
                  </div>

                  {/* Buttons Group */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-full sm:w-auto transform active:scale-95 transition-transform">
                      <OpenModal details={details}></OpenModal>
                    </div>
                    <Link
                      to={`/readDetails/${_id}`}
                      className="w-full sm:w-auto"
                    >
                      <button className="w-full px-12 py-4 border-2 border-[#052c65] text-[#052c65] font-black rounded-2xl hover:bg-[#052c65] hover:text-white transition-all duration-300 uppercase text-xs tracking-[0.2em]">
                        Read Preview
                      </button>
                    </Link>
                  </div>

                  {/* Social Circles */}
                  <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs font-black uppercase text-slate-400 tracking-[0.2em]">
                      Curate your library
                    </p>
                    <div className="flex gap-3">
                      {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                        <button
                          key={i}
                          className="w-10 h-10 rounded-full bg-slate-100 text-[#052c65] flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-500 shadow-sm"
                        >
                          <Icon className="text-sm" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
