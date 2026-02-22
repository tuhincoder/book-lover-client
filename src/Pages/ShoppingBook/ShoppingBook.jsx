import { NavLink } from "react-router-dom";
// import Container from "../../component/common/Container";
import useBooks from "../../hook/useBooks";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // Rating style import nishchit korun
import useCateBooks from "../../hook/useCateBooks";
import Loader from "../../component/Loader/Loader";
import ShoppingBookCart from "./ShoppingBookCart";
import { FaSearch, FaFilter, FaLayerGroup } from "react-icons/fa";

const ShoppingBook = () => {
  const [books] = useBooks();

  const [categoriesBook, isLoading] = useCateBooks();

  if (isLoading) {
    return <Loader />;
  }

  const sidebarTitle =
    "text-lg font-black text-[#052c65] uppercase tracking-wider mb-4 flex items-center gap-2 border-b pb-2";

  return (
    <div className="bg-[#fcfcfd] py-10">
      {/* <Container> */}
      {/* --- Top Bar: Results & Sorting --- */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-sm border border-slate-100 mb-8 px-6 py-4 rounded-2xl gap-4">
        <div className="text-slate-500 font-medium">
          Showing{" "}
          <span className="text-[#052c65] font-bold">
            1–{categoriesBook.length}
          </span>{" "}
          of 34 results
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">
            Sort By:
          </span>
          <select
            defaultValue="default"
            className="select select-bordered select-sm focus:outline-none border-slate-200 text-[#052c65] font-semibold rounded-lg"
          >
            <option disabled value="default">
              Default sorting
            </option>
            <option>Popularity</option>
            <option>Average rating</option>
            <option>Latest Arrivals</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* --- Left Side: Filters (Sidebar) --- */}
        <div className="lg:col-span-1 space-y-10">
          {/* Search Box */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50">
            <h2 className={sidebarTitle}>
              <FaSearch className="text-red-500 text-sm" /> Search
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Find your book..."
                className="w-full bg-slate-50 border-none rounded-xl py-3 pl-4 pr-10 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
            </div>
          </div>

          {/* Categories List */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50">
            <h2 className={sidebarTitle}>
              <FaLayerGroup className="text-red-500 text-sm" /> Categories
            </h2>

            {/* --- */}
            <div className="flex flex-col gap-2">
              {books.map((book) => (
                <NavLink
                  key={book._id}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex justify-between items-center ${
                      isActive
                        ? "bg-[#052c65] text-white shadow-md"
                        : "bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-red-600"
                    }`
                  }
                >
                  {book.name}
                  <span className="text-[10px] opacity-50 italic">→</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50">
            <h2 className={sidebarTitle}>
              <FaFilter className="text-red-500 text-sm" /> Filter By
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">
                  Stock Status
                </label>
                <select className="select select-bordered w-full bg-slate-50 border-none text-sm font-bold text-[#052c65]">
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">
                  Average Rating
                </label>
                <div className="space-y-2 pt-2">
                  {[5, 4, 3].map((star) => (
                    <div
                      key={star}
                      className="flex items-center gap-2 cursor-pointer hover:opacity-70"
                    >
                      <Rating style={{ maxWidth: 80 }} value={star} readOnly />
                      <span className="text-xs font-bold text-slate-400">
                        & Up
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Side: Book Grid --- */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {categoriesBook.length > 0 ? (
              categoriesBook.map((book) => (
                <ShoppingBookCart key={book._id} book={book} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 font-bold italic tracking-widest">
                  No books found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default ShoppingBook;
