import BooksCard from "./BooksCard";
import Container from "../../../component/common/Container";
import useBooks from "../../../hook/useBooks";

const Books = () => {
  const [books] = useBooks();

  return (
    <Container>
      <div className="pt-7 px-4 md:px-0">
        <div className="flex flex-col items-center text-center mb-8 ">
          <h2 className="text-3xl md:text-5xl font-black text-[#052c65] uppercase tracking-tighter">
            Our Book <span className="text-red-500">Collection</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-500 mt-3 mb-4 rounded-full"></div>
          <p className="hidden md:block text-slate-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our vast library of knowledge. Find your next favorite book
            from our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-8">
          {books.map((book) => (
            <div key={book._id} className="flex justify-center w-full">
              <BooksCard book={book} />
            </div>
          ))}
        </div>

        {/* Loading State Logic */}
        {books.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
            <p className="text-[#052c65] font-bold mt-4 animate-pulse">
              Fetching Books...
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Books;
