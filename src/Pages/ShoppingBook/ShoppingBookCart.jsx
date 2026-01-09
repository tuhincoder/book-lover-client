/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaEye } from "react-icons/fa";

const ShoppingBookCart = ({ book }) => {
  const { _id, name, image, rating, price } = book || {};

  return (
    <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-slate-50 p-6 flex justify-center items-center h-64">
        {/* Sale Tag */}
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          Sale
        </div>

        <img
          src={image}
          alt={name}
          className="h-full w-auto object-contain rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
        />

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-[#052c65]/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/categoryBookDetails/${_id}`}
            className="bg-white p-3 rounded-full text-[#052c65] hover:bg-red-500 hover:text-white transition-colors shadow-xl"
          >
            <FaEye />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Rating */}
        <div className="mb-2">
          <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
        </div>

        {/* Name */}
        <h2 className="text-[#052c65] text-lg font-black leading-tight mb-2 capitalize line-clamp-1 group-hover:text-red-500 transition-colors">
          {name}
        </h2>

        <div className="mt-auto">
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-black text-[#052c65]">${price}</span>
            <span className="text-xs text-slate-400 line-through font-bold">
              ${(price + 15).toFixed(2)}
            </span>
          </div>

          {/* Action Button */}
          <Link to={`/categoryBookDetails/${_id}`} className="block">
            <button className="w-full bg-[#052c65] hover:bg-red-500 text-white font-black py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] active:scale-95 shadow-lg shadow-blue-900/10">
              <FaShoppingCart className="text-sm" />
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBookCart;
