/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import Loader from "../../component/Loader/Loader";
import { FaCartPlus } from "react-icons/fa";

const TopBookCart = ({ book, isLoading }) => {
  const {
    _id,
    book_image,
    book_name,
    previous_price,
    running_price,
    author_img,
    author_name,
    rating,
  } = book || {};

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Image Section with Badge */}
      <figure className="relative p-5 bg-slate-50 flex justify-center items-center overflow-hidden h-64">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            Top Rated
          </span>
        </div>

        <img
          src={book_image}
          alt={book_name}
          className="rounded-lg h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
        />

        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-[#052c65]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </figure>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Title & Price */}
        <div className="space-y-1">
          <h2 className="text-lg font-black text-[#052c65] leading-tight line-clamp-1 group-hover:text-red-500 transition-colors">
            {book_name}
          </h2>
          <div className="flex items-center gap-3 pt-1">
            <span className="text-xl font-bold text-red-500">
              ${running_price}
            </span>
            <span className="text-sm text-slate-400 line-through font-medium">
              ${previous_price}
            </span>
          </div>
        </div>

        {/* Author & Rating */}
        <div className="flex items-center justify-between py-2 border-y border-slate-50">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-8 h-8 rounded-full ring-1 ring-red-100">
                <img src={author_img} alt={author_name} />
              </div>
            </div>
            <p className="text-xs font-bold text-slate-500 truncate w-24">
              {author_name}
            </p>
          </div>
          <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Link to={`/addToCartDetails/${_id}`} className="w-full block">
            <button className="w-full flex items-center justify-center gap-2 bg-[#052c65] hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-lg shadow-blue-100">
              <FaCartPlus className="text-lg" />
              <span>Add To Cart</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBookCart;
