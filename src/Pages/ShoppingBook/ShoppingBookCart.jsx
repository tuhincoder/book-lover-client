/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ShoppingBookCart = ({ book }) => {
    const { _id, name, image, rating, price } = book || {};

    return (
        <div>
            <div className="bg-base-100 md:w-60 ">
                <figure className="px-10 pt-10 rounded-md bg-gray-100">
                    <img
                        src={image}
                        alt="Shoes"
                        className="hover:scale-95 duration-500 transition  rounded-xl h-[200px] w-3/4 mx-auto object-cover" />
                </figure>
                <div className="px-4 py-2">
                    <h2 className="text-[#052c65] text-xl capitalize">{name}</h2>
                    <div className="flex items-center justify-between my-3">
                        <div>
                            <p className="font-semibold text-orange-400">${price}</p>
                        </div>
                        <div>
                            <Rating
                                className="w-10"
                                style={{ maxWidth: 100, fontSize: '10px' }}
                                value={rating}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="">
                        <Link to={`/categoryBookDetails/${_id}`}>
                            <button className="border w-full rounded-xl bg-slate-100 py-2 hover:bg-[#052c65] hover:text-white duration-500 transition text-[#052c65] font-semibold">Add To Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingBookCart;