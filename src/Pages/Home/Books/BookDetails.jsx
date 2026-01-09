import { Link, useLoaderData } from "react-router-dom";
// import book1 from '../../../assets/images/bookDetails/book1.jpg'
// import book2 from '../../../assets/images/bookDetails/book2.jpg'
// import book3 from '../../../assets/images/bookDetails/book3.jpg'
// import book4 from '../../../assets/images/bookDetails/book4.jpg'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import OpenModal from "../../../component/OpenModal";
import Container from "../../../component/common/Container";
import HeaderText from "../../../component/common/HeaderText";

const BookDetails = () => {
  const details = useLoaderData();

  const { _id, image, name, description, rating } = details;
  console.log(details);
  return (
    <Container>
      <HeaderText Heading={"Book Details"} subHeading={"Book Details"} />
      <div>
        <div className="flex flex-col md:flex-row my-8">
          <img
            className="md:w-1/3 md:h-[500px] md:my-10 rounded-lg "
            src={image}
            alt=""
          />

          <div className="md:ml-28 p-5 md:mt-10 ">
            <div className="flex flex-col items-center md:items-start">
              <h2>{name}</h2>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              <h2 className="flex items-center ">
                <p className="text-3xl font-semibold">$ 450.00</p>
                <p></p>
                <strike className="text-xl font-semibold ml-7">$ 209.00</strike>
              </h2>
            </div>
            <div className="divider "></div>
            <p>{description}</p>
            {/* Availability */}
            <div className="mt-5">
              <p className="text-lg mb-4 hidden md:block">
                Availability:{" "}
                <span className="text-orange-500 hidden md:block">
                  In Stock
                </span>
              </p>
              <div className="hidden md:block">
                <div className="flex ">
                  <div className="">
                    <p className="text-xl font-semibold text-gray-500">Size:</p>
                    <button className="hover:text-orange-400 md:text-xl text-gray-500">
                      sm
                    </button>
                    <button className="md:mx-5 md:text-xl text-gray-500 hover:text-orange-400">
                      md
                    </button>
                    <button className="hover:text-orange-400 md:text-xl text-gray-500">
                      xl
                    </button>
                  </div>
                  <div className="mx-8">
                    <p className="text-xl text-gray-500 font-semibold">
                      Color:
                    </p>
                    <button className=" bg-gray-500 w-9 h-6 border hover:border-2 hover:border-orange-500"></button>
                    <button className=" bg-black w-9 h-6 border md:mx-3 hover:border-2 hover:border-orange-500"></button>
                    <button className=" bg-red-500 w-9 h-6 border hover:border-2 hover:border-orange-500"></button>
                  </div>
                  <div>
                    <p className=" font-semibold text-xl text-gray-500 ">
                      Material:
                    </p>
                    <button className="text-xl text-gray-500 hover:text-orange-400">
                      Wool
                    </button>
                    <button className="mx-3 text-xl text-gray-500 hover:text-orange-400 ">
                      Fiber
                    </button>
                    <button className="hover:text-orange-400 text-xl text-gray-500">
                      Plastic
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex">
                  <OpenModal details={details}></OpenModal>
                  <Link to={`/readDetails/${_id}`}>
                    <button className=" btn btn-outline  md:ml-16 ml-3 hover:bg-orange-300 hover:text-black md:uppercase">
                      Read more...
                    </button>
                  </Link>
                </div>
                <p className=" mt-4 text-xl font-bold text-gray-500">
                  Categories:{" "}
                  <span className="text-gray-400">
                    Adventure, Biographic, Children, Christmas Best, Christmas
                    Hot
                  </span>
                </p>
                <div className="flex items-center mt-5">
                  <h4 className="text-xl font-bold text-gray-500">Share:</h4>
                  <button className="btn btn-circle btn-outline ml-3">
                    <FaFacebook className="text-3xl" />
                  </button>
                  <button className="btn btn-circle btn-outline mx-4">
                    <FaTwitter className="text-3xl" />
                  </button>
                  <button className="btn btn-circle btn-outline">
                    <FaInstagram className="text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
