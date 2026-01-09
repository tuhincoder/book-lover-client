import AllBookCart from "./AllBookCart";
import useCateBooks from "../../hook/useCateBooks";
import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import Loader from "../../component/Loader/Loader";
import { FaFilter, FaThLarge, FaSearch } from "react-icons/fa";

const AllBooks = () => {
  const [categoriesBook, isLoading] = useCateBooks();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-20">
      <Container>
        {/* Header Section - Optimized Subheading */}
        <div className="">
          <HeaderText
            Heading={"Our Collection"}
            subHeading={"Discover Your Next Story"}
          />
        </div>

        {/* Filter & Inventory Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-[20px] md:rounded-[30px] shadow-sm border border-slate-100 mb-8 md:mb-12 mt-6 gap-5">
          {/* Left: Stats */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="bg-[#052c65] p-3 rounded-xl text-white shadow-lg shadow-blue-900/10">
              <FaThLarge className="text-lg" />
            </div>
            <div>
              <h2 className="text-[#052c65] font-black uppercase text-[10px] tracking-[2px]">
                Library
              </h2>
              <p className="text-slate-400 font-bold text-xs md:text-sm">
                Total:{" "}
                <span className="text-red-500">{categoriesBook.length}</span>{" "}
                Books
              </p>
            </div>
          </div>

          {/* Right: Search & Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-[#052c65]/10 focus:border-[#052c65] transition-all outline-none"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-xs" />
            </div>
            <button className="bg-slate-50 p-3 rounded-xl text-[#052c65] hover:bg-red-500 hover:text-white transition-all duration-300 border border-slate-100">
              <FaFilter className="text-sm" />
            </button>
          </div>
        </div>

        {/* Books Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categoriesBook.map((book, index) => (
            <div
              key={book._id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AllBookCart book={book} />
            </div>
          ))}
        </div>

        {/* Empty State Logic */}
        {categoriesBook.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[30px] border-2 border-dashed border-slate-100 mt-10">
            <div className="inline-block p-6 rounded-2xl bg-slate-50 mb-4">
              <FaThLarge className="text-4xl text-slate-200" />
            </div>
            <h3 className="text-[#052c65] font-black text-lg uppercase tracking-widest">
              No Books Found
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Try searching for something else.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllBooks;
