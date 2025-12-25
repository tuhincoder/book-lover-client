/* eslint-disable react/prop-types */
import useComment from "../../hook/useComment";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useState } from "react";
import GetCurrentDateTime from "../../component/utils/GetCurrentDateTime";
import { toast } from "react-toastify";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Rating } from "@smastrom/react-rating";
import userImg from '../../assets/images/logo/user.jpg'




const AddToComment = ({ rating, review_date_time, description, long_description, publish_years, category, author_img, author_name, total_page, format, century, language }) => {
    const [comment, refetch] = useComment()
    // const [topBooks, isLoading] = useTopBooks()
    // const location = useLocation()
    // const [books] = useBooks()
    // console.log(books);
    // const [carts, refetch] = useCarts()
    // const navigate = useNavigate()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    // const [count, setCount] = useState(0)
    const [tabIndex, setTabIndex] = useState(0);
    // const { _id, book_image, book_name, running_price, author_img, author_name, rating, review_date_time, description, long_description, SKU, category, format, total_page, language, = 


    // ------------
    const localTime = GetCurrentDateTime()


    // ------add to comment----------
    const handleComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const text = form.text.value;
        console.log(name, email, text);
        const userInfo = {
            name,
            email,
            text,
            userImage: user?.photoURL,
            rating,
            description,
            review_date_time,
            localTime
        }
        axiosPublic.post('/comment', userInfo)
            .then(res => {
                console.log(res.data);
                refetch()
                document.getElementById('myForm').reset()
                if (res.data.insertedId) {
                    toast.success('Thanks For Your Feedback')

                }
            })
    }

    return (
        <div>
            <div className="mt-10 ">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList >
                        <Tab ><b>Description</b></Tab>
                        <Tab><b>Additional Information</b></Tab>
                        <Tab><b>Reviews({comment.length})</b></Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                            <p>{description}</p>
                            <p>{long_description}</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <table className="table">

                                <tbody>
                                    <tr>
                                        <td className="font-semibold">Availability</td>
                                        <td className="text-gray-600">Available</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Category</td>
                                        <td className="text-gray-600" >{category}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Publish Date</td>
                                        <td className="text-gray-600">{publish_years}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Total Page</td>
                                        <td className="text-gray-600">{total_page}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Format</td>
                                        <td className="text-gray-600">{format}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Country</td>
                                        <td className="text-gray-600">{century}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Language</td>
                                        <td className="text-gray-600">{language}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Dimension</td>
                                        <td className="text-gray-600">30 × 32 × 46 Inches</td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Weight</td>
                                        <td className="text-gray-600">2.5 Pounds</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel style={{ padding: '20px' }}>
                        {/* static */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-5">
                                <img src={author_img} className=" w-20 h-20 rounded-full" alt="" />
                                <div className="">
                                    <h1 className="text-xl font-semibold">{author_name}</h1>
                                    <p className="text-gray-600 text-sm">{review_date_time}</p>
                                    <p className="text-gray-600">{description}</p>
                                </div>
                            </div>
                            <div>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                        </div>
                        {/* dynamic comment set */}

                        {/* <p>{dateTimeObject}</p> */}
                        <div className="space-y-4 mt-3">
                            {
                                comment.map(com => (
                                    <div key={com._id} >
                                        <div className="flex items-center justify-between ">
                                            <div>
                                                <div className="flex items-center gap-4">
                                                    <img src={com.userImage ? com.userImage : userImg} className=" w-20 h-20 rounded-full" alt="" />
                                                    <div className="">
                                                        <h1 className="text-xl font-semibold">{com.name}</h1>
                                                        <p className="text-sm  text-gray-600">{com.localTime}</p>
                                                        <p className="text-gray-600">{com.text} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Rating
                                                    style={{ maxWidth: 80 }}
                                                    value={rating}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* your comment */}
                        <div>
                            <form id="myForm" onSubmit={handleComment} className="card-body">
                                <h1 className="font-bold">Your Rating*</h1>
                                <div className="md:flex gap-3">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input name="name" type="Text" placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="password" className="input input-bordered" required />
                                    </div>
                                </div>

                                <textarea
                                    name="text"
                                    className="textarea textarea-bordered h-[150px] mt-3" placeholder="Write Message"

                                ></textarea>
                                <div className="form-control mt-6">
                                    <input
                                        className="
                            relative h-10  origin-top transform rounded-lg border-2 border-[#007aff] bg-[#052c65] text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500"
                                        type="submit"
                                        value="Submit Now" />
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AddToComment;