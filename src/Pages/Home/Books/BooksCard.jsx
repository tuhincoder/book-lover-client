/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
  const { image, name } = book;

  return (
    <div className="card  border-2  h-[350px]">
      <figure className="px-5 py-6  ">
        <img
          src={image}
          alt="Shoes"
          className="
                w-11/12  object-cover p-3
                hover:scale-105 duration-700 transition
                "
        />
      </figure>
      <Link to={`/bookCategories/${name}`}>
        <div className="card-body ">
          <div className="card-actions flex justify-between items-center">
            <h2 className="card-title uppercase hover:text-[#052c65]">
              {name}
            </h2>
            <button className=" text-red-500 text-2xl">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BooksCard;
