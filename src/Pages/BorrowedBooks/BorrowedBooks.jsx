import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import BorrowedBookCart from "./BorrowedBookCart";
import { useQuery } from "@tanstack/react-query";
// import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import { FaBookReader, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: borrowed = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["borrowed", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/borrowed?email=${user?.email}`);
      console.log(borrowed);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center text-[#052c65] font-black uppercase tracking-widest">
        Loading Library...
      </div>
    );

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-20">
      {/* <Container> */}
      {/* Responsive Header */}
      <div className="pt-10">
        <HeaderText
          Heading={"Borrowed Collection"}
          subHeading={"Manage your currently borrowed books"}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 ">
        {/* --- Left Side: Borrowed Books List (8 Cols) --- */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          {borrowed?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {borrowed.map((book, indx) => (
                <div key={indx} className="animate-fadeIn">
                  <BorrowedBookCart book={book} refetch={refetch} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-100">
              <FaBookReader className="text-6xl text-slate-200 mx-auto mb-4" />
              <h1 className="text-xl md:text-2xl text-[#052c65] font-black uppercase tracking-tighter">
                No Borrowed Books Found
              </h1>
              <p className="text-slate-400 mt-2 font-medium">
                Your library bag is empty. <br />
                <span className="text-red-500 font-bold uppercase text-xs tracking-widest cursor-pointer hover:underline">
                  <Link to={`/categoryBookDetails/${borrowed?._id}`}>
                    Browse books to borrow
                  </Link>
                </span>
              </p>
            </div>
          )}
        </div>

        {/* --- Right Side: Info Card (4 Cols) --- */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="sticky top-24">
            <div className="group relative overflow-hidden bg-[#052c65] rounded-[40px] p-8 text-white shadow-2xl shadow-blue-900/20">
              {/* Decorative Circles */}
              <span className="absolute left-[-20%] top-[-10%] h-40 w-40 rounded-full bg-red-500/20 blur-3xl group-hover:bg-red-500/30 transition-all duration-700"></span>
              <span className="absolute right-[-10%] bottom-[-10%] h-40 w-40 rounded-full bg-blue-400/10 blur-3xl"></span>

              <div className="relative z-20 space-y-6">
                <div className="flex items-center gap-3">
                  <FaInfoCircle className="text-red-500 text-2xl" />
                  <h1 className="text-xl font-black uppercase tracking-tighter">
                    Borrower Policy
                  </h1>
                </div>

                <div className="space-y-4">
                  <p className="text-white/70 text-sm leading-relaxed font-medium">
                    Books are the gateways to different worlds. By borrowing,
                    you agree to keep the books in pristine condition and return
                    them by the due date.
                  </p>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-xs italic text-white/50 leading-relaxed">
                      "A reader lives a thousand lives before he dies. The man
                      who never reads lives only one."
                    </p>
                  </div>
                </div>

                <button className="w-full bg-red-500 hover:bg-white hover:text-[#052c65] text-white font-black py-4 rounded-2xl transition-all duration-500 uppercase tracking-widest text-xs shadow-xl shadow-red-950/20">
                  I Understand
                </button>
              </div>
            </div>

            {/* Stats Card below Info Card */}
            <div className="mt-6 bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm flex items-center justify-between px-8">
              <span className="text-[#052c65] font-black uppercase text-[10px] tracking-widest">
                Total Active
              </span>
              <span className="text-3xl font-black text-red-500">
                {borrowed.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default BorrowedBooks;
