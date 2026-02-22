import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import bannerImg from "../../assets/images/bookBaner/bookh3.jpg";
// import Container from "../../component/common/Container";
import HeaderImage from "../../component/common/HeaderImage";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import Modal from "../../component/utils/TopNavbar/Modal";
import { CgShoppingCart } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";
import { HiPlus, HiMinus } from "react-icons/hi";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import Loader from "../../component/Loader/Loader";
import useBooks from "../../hook/useBooks";
import BooksCard from "../Home/Books/BooksCard";
import AddToComment from "./AddToComment";
import useCarts from "../../hook/useCarts";

const AddToCartDetails = () => {
  const location = useLocation();
  const [books] = useBooks();
  const [, refetch, isLoading] = useCarts();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [count, setCount] = useState(1);

  const data = useLoaderData();
  const {
    _id,
    book_image,
    book_name,
    running_price,
    author_img,
    author_name,
    rating,
    review_date_time,
    description,
    long_description,
    SKU,
    category,
    format,
    total_page,
    language,
    publish_years,
    century,
  } = data || {};

  const handleAddToCart = () => {
    if (user?.email) {
      const cartItem = {
        email: user?.email,
        bookName: book_name,
        cartId: _id,
        bookImg: book_image,
        price: running_price,
        quantity: count,
      };
      axiosPublic.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Added to Cart",
            text: `${book_name} has been saved to your bag.`,
            confirmButtonColor: "#052c65",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Login Required",
        text: "Please login to add items to your cart",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#052c65",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed)
          navigate("/login", { state: { from: location } });
      });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="bg-white">
      <HeaderImage image={bannerImg} text={"Book Store"} />

      {/* <Container> */}
      <div className="py- ">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Professional Image Gallery Look */}
          <div className="flex-1 w-full bg-[#f8fafc] rounded-[40px] p-8 md:p-16 border border-slate-100 shadow-inner">
            <div className="relative group">
              <img
                src={book_image}
                className="w-full max-w-[400px] h-auto rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] mx-auto transition-transform duration-700 group-hover:scale-105"
                alt={book_name}
              />
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl font-black">
                SALE
              </div>
            </div>
          </div>

          {/* Right: Detailed Info */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-red-500 font-black uppercase tracking-[0.3em] text-xs">
                Premium Edition
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#052c65] tracking-tighter leading-none uppercase">
                {book_name}
              </h1>
              <div className="flex items-center gap-4">
                <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
                <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                  (1 Customer Review)
                </span>
              </div>
            </div>

            <h3 className="text-5xl font-black text-[#052c65] tracking-tight">
              ${running_price}
            </h3>

            <div className="space-y-4">
              <p className="text-slate-500 text-lg leading-relaxed italic border-l-4 border-red-500 pl-6">
                {description}
              </p>
              <p className="text-slate-400 leading-relaxed line-clamp-3">
                {long_description}
              </p>
            </div>

            {/* Action Area */}
            <div className="flex flex-wrap items-center gap-4 pt-6 pb-10 border-b border-slate-100">
              {/* Quantity Switcher */}
              <div className="flex items-center bg-slate-100 rounded-2xl p-2 gap-6 border border-slate-200">
                <button
                  onClick={() => setCount(Math.max(1, count - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-red-500 transition-colors"
                >
                  <HiMinus />
                </button>
                <span className="text-xl font-black text-[#052c65] w-6 text-center">
                  {count}
                </span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-red-500 transition-colors"
                >
                  <HiPlus />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-[#052c65] text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-red-500 transition-all duration-500 shadow-xl shadow-blue-900/20"
              >
                <CgShoppingCart className="text-xl" /> Add To Cart
              </button>

              <button className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500 transition-all group">
                <GiSelfLove className="text-2xl group-active:scale-125 transition-transform" />
              </button>
            </div>

            {/* Specs Grid: High End Clean Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
              {[
                { label: "SKU", val: SKU },
                { label: "Category", val: category },
                { label: "Format", val: format },
                { label: "Pages", val: total_page },
                { label: "Language", val: language },
                { label: "Year", val: publish_years },
                { label: "Century", val: century },
              ].map((spec, i) => (
                <div key={i}>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                    {spec.label}
                  </p>
                  <p className="text-sm font-bold text-[#052c65]">{spec.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Tabs Section */}
      <div className="mt-20">
        <AddToComment {...data} />
      </div>

      {/* Related Books: Luxury Slider Style Grid */}
      <div className="mt-32 pb-20">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl font-black text-[#052c65] uppercase tracking-tighter">
            Related Treasures
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 pt-4">
            Curated selections specifically for your library.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.slice(0, 4).map((book) => (
            <BooksCard key={book._id} book={book} />
          ))}
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default AddToCartDetails;
