import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import {
  FaTrashAlt,
  FaCalendarAlt,
  FaUser,
  FaLayerGroup,
} from "react-icons/fa";

/* eslint-disable react/prop-types */
const BorrowedBookCart = ({ book, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    date,
    image,
    category,
    book_name,
    author_name,
    quantity,
    email,
    userName,
  } = book;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Return Book?",
      text: "Are you sure you want to return this book to the library?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#052c65",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Return it!",
      background: "#fff",
      customClass: {
        title: "font-black text-[#052c65]",
        confirmButton: "rounded-xl px-6 py-3",
        cancelButton: "rounded-xl px-6 py-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/borrowed/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Returned!",
              text: "The book has been successfully returned.",
              icon: "success",
              confirmButtonColor: "#052c65",
            });
          }
        });
      }
    });
  };

  return (
    <div className="group bg-white rounded-[30px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full">
      {/* Left Side: Image Section */}
      <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={book_name}
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          Qty: {quantity}
        </div>
      </div>

      {/* Right Side: Content Section */}
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="flex items-center gap-1.5 text-[10px] font-black text-red-500 uppercase tracking-widest">
              <FaLayerGroup /> {category}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <FaCalendarAlt /> {date}
            </span>
          </div>

          <h2 className="text-[#052c65] font-black text-xl md:text-2xl leading-tight uppercase tracking-tighter group-hover:text-red-600 transition-colors">
            {book_name}
          </h2>
          <p className="text-slate-400 text-sm font-bold mt-1">
            By: {author_name}
          </p>

          {/* User Info Section */}
          <div className="mt-4 pt-4 border-t border-slate-50 space-y-2">
            <div className="flex items-center gap-2 text-slate-500">
              <FaUser className="text-[#052c65] text-xs" />
              <p className="text-xs font-semibold">{userName}</p>
            </div>
            <p className="text-[11px] text-slate-400 font-medium ml-5">
              {email}
            </p>
          </div>
        </div>

        {/* Return Button */}
        <div className="mt-6">
          <button
            onClick={() => handleDelete(_id)}
            className="w-full flex items-center justify-center gap-2 bg-slate-50 text-[#052c65] hover:bg-red-500 hover:text-white font-black py-3 rounded-2xl transition-all duration-300 uppercase tracking-widest text-[10px] border border-slate-100"
          >
            <FaTrashAlt className="text-xs" />
            Return Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBookCart;
