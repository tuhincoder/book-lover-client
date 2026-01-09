/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  const { image, name } = book;

  return (
    <div className="group bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[400px] w-full max-w-[320px] overflow-hidden">
      {/* Image Container with Zoom Effect */}
      <div className="relative h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-6">
        <img
          src={image}
          alt={name}
          className="h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-[#052c65]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Card Content */}
      <Link
        to={`/bookCategories/${name}`}
        className="flex-1 flex flex-col justify-between"
      >
        <div className="p-6">
          <div className="flex justify-between items-start gap-3">
            <h2 className="text-lg font-black text-[#052c65] uppercase tracking-tight leading-tight group-hover:text-red-500 transition-colors">
              {name}
            </h2>
            <div className="bg-red-50 p-2 rounded-xl text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-4 flex items-center gap-2">
            <div className="h-1 w-12 bg-red-500 rounded-full transition-all duration-500 group-hover:w-20"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              View Category
            </span>
          </div>
        </div>

        {/* Bottom Bar Styling */}
        <div className="h-1.5 w-full bg-slate-50 group-hover:bg-red-500 transition-colors duration-500"></div>
      </Link>
    </div>
  );
};

export default BooksCard;
