import { NavLink } from "react-router-dom";
import Container from "../../component/common/Container";
import useBooks from "../../hook/useBooks";
import { Rating } from "@smastrom/react-rating";
import useCateBooks from "../../hook/useCateBooks";
import Loader from "../../component/Loader/Loader";
import ShoppingBookCart from "./ShoppingBookCart";

const ShoppingBook = () => {
    const [books] = useBooks()
    const [categoriesBook, isLoading] = useCateBooks()
    console.log(categoriesBook);


    if (isLoading) {
        return <Loader />
    }

    return (
        <Container>
            <div className="flex items-center justify-between border mb-5 px-10 rounded py-3">
                <div>
                    <h2>Showing 1-3 Of 34 Results</h2>
                </div>
                <div>
                    <select defaultValue="default" className="focus-visible:outline-none w-full max-w-xs">
                        <option disabled value="default">Default sorting</option>
                        <option>Sort by popularity</option>
                        <option>sort by average rating</option>
                        <option>sort by latest</option>
                    </select>
                </div>
            </div >
            <div className="grid md:grid-cols-6 gap-5 ">
                <div className="md:col-span-2 px-5 space-y-3">
                    <h2 className="text-2xl text-[#052c65] mb-4 font-medium">Search</h2>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search here" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    {/* categories */}
                    <div>
                        <h2 className="text-2xl text-[#052c65] mb-4 font-medium">Categories</h2>
                        <div>
                            {
                                books.map(book => (
                                    <NavLink
                                        key={book._id}
                                        className={({ isActive }) => isActive ? "flex flex-col uppercase my-4 py-2 rounded hover:bg-[#052c65] hover:text-white bg-gray-200 text-[#052c65] text-lg border px-5 w-1/2 " : "flex flex-col uppercase my-4 py-2 rounded hover:bg-[#052c65] hover:text-white bg-gray-200 text-[#052c65] text-lg border px-5 w-1/2 "}
                                    >{book.name}</NavLink>
                                ))
                            }
                        </div>
                    </div>
                    {/* product status */}
                    <div>
                        <h2 className="text-2xl text-[#052c65] mb-4 font-medium">Product Status</h2>
                        <select defaultValue="default" className="select text-[#052c65] text-lg capitalize select-bordered w-full max-w-xs">
                            <option disabled value="default">In Stock</option>
                            <option>Castile in the Sky</option>
                            <option>The Hidden Mystery Behind</option>
                            <option>Flovely And Unicoma Erna</option>
                        </select>
                        <select defaultValue="default" className="select select-bordered w-full max-w-xs text-[#052c65] text-lg mt-3">
                            <option disabled value="default">On Sale</option>
                            <option>Flovely Unicoma Erna</option>
                            <option>Castle in the sky</option>
                            <option>How deal with very bad book</option>
                        </select>
                    </div>
                    {/* filter by price */}

                    <div>
                        <h2 className="text-2xl text-[#052c65] mb-4 font-medium">Product Status</h2>
                        <ul className="steps steps-vertical lg:steps-horizontal">
                            <li className="step text-[#052c65] step-primary">Price: $100</li>
                            <li className="step text-[#052c65]">$1000</li>
                            <li className="step text-[#052c65] step-primary"></li>
                            <li className="step text-[#052c65]"></li>

                        </ul>

                    </div>
                    {/* by review */}
                    <div>
                        <h2 className="text-2xl text-[#052c65] mb-4 font-medium">Product Status</h2>
                        <div className="form-control ">

                            <Rating
                                style={{ maxWidth: 100 }}
                                value={3}
                                readOnly
                            />
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4}
                                readOnly
                            />
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={3.4}
                                readOnly
                            />
                        </div>
                    </div>
                </div>

                {/* right side details */}
                <div className="md:col-span-4 px-5">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            categoriesBook.map(book => <ShoppingBookCart
                                key={book._id}
                                book={book}
                            ></ShoppingBookCart>)
                        }
                    </div>

                </div>
            </div>
        </Container >
    );
};

export default ShoppingBook;