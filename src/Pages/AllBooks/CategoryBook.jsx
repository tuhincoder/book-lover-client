/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const CategoryBook = ({ cat }) => {
  const { _id, author_name, name, image, category, rating, price } = cat || {};
  return (
    <div>
      <div className="card h-[450px] hover:shadow-2xl shadow-xl hover:border-b-2 border-orange-400">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-[250px] "
          />
        </figure>
        <div className="flex items-center justify-evenly mt-2">
          <h2 className="  text-lg">
            Category:{" "}
            <span className="text-orange-400 capitalize">{category}</span>
          </h2>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
        <div className="card-body items-center text-center ">
          <div className="flex justify-between  w-full items-center">
            <h2 className="text-xl font-semibold hover:text-orange-400 transition ">
              {name}
            </h2>
            <p className="text-gray-400">By: {author_name}</p>
          </div>
          <div className="divider"></div>
          <div className="flex items-center justify-between w-full">
            <p className="text-lg font-serif text-gray-500">
              <span className="text-xl font-bold">${price}</span>{" "}
              <span className="line-through">$970</span>
            </p>
            <Link to={`/categoryBookDetails/${_id}`}>
              <button className="btn border-2 border-gray-300 hover:bg-orange-300 ">
                Book details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBook;
