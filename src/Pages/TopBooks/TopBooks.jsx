// import Container from "../../component/common/Container";
import TopBookCart from "./TopBookCart";
import useTopBooks from "../../hook/useTopBooks";

const TopBooks = () => {
  const [topBooks, isLoading] = useTopBooks();

  return (
    <div className="relative overflow-hidden pt-8 bg-slate-50">
      <div className="absolute top-0 -right-72 bg-[#052c65] opacity-[0.05] transform rotate-12 w-full h-full pointer-events-none"></div>

      {/* <Container> */}
      {/* Header */}
      <div className="relative mb-12 flex flex-col items-center md:items-start z-10">
        <h1 className="text-3xl md:text-5xl font-black text-[#052c65] uppercase tracking-tighter">
          Library <span className="text-red-500">Top Books</span>
        </h1>
        <div className="w-20 h-1.5 bg-red-500 mt-3 rounded-full"></div>
      </div>

      {/* Grid - items-stretch is key for same height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 items-stretch">
        {isLoading
          ? [1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-[400px] w-full bg-white animate-pulse rounded-3xl border border-slate-100"
              ></div>
            ))
          : topBooks.map((book) => <TopBookCart key={book._id} book={book} />)}
      </div>
      {/* </Container> */}
    </div>
  );
};

export default TopBooks;
