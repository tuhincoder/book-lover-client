import Container from "../../component/common/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import './getDiscount.css'
import disCountImg from '../../assets/images/bookDetails/discountbg.png'
import { Link } from "react-router-dom";
// import disCountBooks from '../../assets/images/bookDetails/booksDiscount.png'
const GetDiscount = () => {



    return (
        <Container>
            <div className="max-w-7xl h-[400px]">
                <div className="bg-[#052c65] relative rounded py-32 text-white">
                    {/* <img src={disCountBooks} alt="" className="w-[200px] h-[400px] absolute left-0 object-cover bottom-0" /> */}
                    <div className=" flex flex-col justify-center items-center ">

                        <h1 className="text-xl md:text-5xl font-mono  font-bold  "> Get 25% Discount in All <br /> Kind Of Super Selling</h1>
                        <Link to={'/shopping'} >
                            <h2 className="flex items-center gap-3 border px-6 py-2 rounded-2xl mt-6 cursor-pointer hover:bg-red-400 duration-500 transition">Shop Now <FaArrowRightLong /></h2>
                        </Link>
                    </div>
                    <img src={disCountImg} alt="" className="w-[400px] h-[450px]  absolute right-0 object-cover bottom-0 hidden md:block" />
                </div>
            </div>
        </Container>
    );
};

export default GetDiscount;