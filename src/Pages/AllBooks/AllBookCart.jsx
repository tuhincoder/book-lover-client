/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaEdit, FaArrowRight } from "react-icons/fa";

const AllBookCart = ({ book }) => {
  const { _id, image, price, name, author_name, rating } = book || {};

  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
      {/* --- Top Section: Image & Badge --- */}
      <div className="relative h-64 overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={name}
        />
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-[#052c65] text-white px-4 py-1 rounded-full text-sm font-black shadow-lg">
          ${price}
        </div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#052c65]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <Link to={`/updateAllBook/${_id}`} className="w-full">
            <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <FaEdit /> Quick Update
            </button>
          </Link>
        </div>
      </div>

      {/* --- Bottom Section: Content --- */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
            <span className="text-[10px] bg-red-50 text-red-500 px-2 py-0.5 rounded font-bold uppercase tracking-widest">
              Premium
            </span>
          </div>

          <h2 className="text-[#052c65] font-black text-xl leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-red-600 transition-colors">
            {name}
          </h2>

          <p className="text-slate-400 text-sm mt-2 flex items-center gap-2 italic">
            <span className="w-4 h-[1px] bg-slate-200"></span>
            {author_name}
          </p>
        </div>

        {/* --- Action Bar --- */}
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-300 font-bold uppercase tracking-[2px]">
              Status
            </span>
            <span className="text-xs font-bold text-green-500 uppercase tracking-wider">
              In Stock
            </span>
          </div>

          <Link to={`/updateAllBook/${_id}`}>
            <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-[#052c65] group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-inner">
              <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllBookCart;
