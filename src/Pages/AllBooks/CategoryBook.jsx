/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const CategoryBook = ({ cat }) => {
  const { _id, author_name, name, image, category, rating, price } = cat || {};

  return (
    <div className="h-full">
      <div className="group bg-white rounded-[30px] border border-slate-100 p-4 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border-b-4 hover:border-red-500">
        {/* Image Section */}
        <div className="relative h-[250px] w-full overflow-hidden rounded-[20px] bg-slate-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-5 px-2 flex flex-col flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-50 px-2 py-1 rounded-md">
              {category}
            </span>
            <p className="text-[#052c65] font-bold text-lg">${price}</p>
          </div>

          {/* Fixed Height Title for Alignment */}
          <h2 className="text-lg font-bold text-[#052c65] leading-tight line-clamp-2 min-h-[3rem] group-hover:text-red-600 transition-colors">
            {name}
          </h2>

          <p className="text-slate-400 text-sm mt-1 mb-4 italic">
            By: {author_name}
          </p>

          <div className="divider opacity-50 my-2"></div>

          {/* Footer Section - Pushed to Bottom */}
          <div className="mt-auto flex items-center justify-between gap-2">
            <div>
              <span className="text-xs text-slate-400 line-through block">
                $970
              </span>
              <span className="text-xs font-bold text-green-600">
                Save ${970 - price}
              </span>
            </div>

            <Link to={`/categoryBookDetails/${_id}`}>
              <button className="px-4 py-2 bg-[#052c65] text-white text-xs font-bold rounded-lg hover:bg-red-500 transition-all duration-300 shadow-lg shadow-blue-900/10">
                Book Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBook;
