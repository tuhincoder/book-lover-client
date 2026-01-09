/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Container from "../../component/common/Container";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AllBookCart = ({ book }) => {
  const { _id, image, price, name, author_name, rating } = book || {};

  return (
    <Container>
      <div className="max-[350px] space-y-6 rounded-2xl shadow-md px-6 py-4  border md:w-[350px]">
        {/* Card Image */}
        <img
          width={350}
          height={190}
          className="h-[190px] w-[350px] rounded-2xl bg-gray-400 object-cover"
          src={image}
          alt="card navigate ui"
        />
        {/* Card Heading */}
        <div className="space-y-2">
          <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90 font-serif">
            {name}
          </h2>
        </div>
        <div className="flex font-serif items-center justify-between">
          <p className="">By: {author_name}</p>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-between">
          <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60 font-serif">
            ${price}
          </h2>
          <Link to={`/updateAllBook/${_id}`}>
            <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
              Update
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AllBookCart;
