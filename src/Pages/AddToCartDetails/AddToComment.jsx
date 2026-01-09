/* eslint-disable react/prop-types */
import useComment from "../../hook/useComment";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useState } from "react";
import GetCurrentDateTime from "../../component/utils/GetCurrentDateTime";
import { toast } from "react-toastify";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Rating } from "@smastrom/react-rating";
import userImg from "../../assets/images/logo/user.jpg";
import { FaRegCommentDots, FaInfoCircle, FaAlignLeft } from "react-icons/fa";

const AddToComment = ({
  rating,
  review_date_time,
  description,
  long_description,
  publish_years,
  category,
  author_img,
  author_name,
  total_page,
  format,
  century,
  language,
}) => {
  const [comment, refetch] = useComment();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [tabIndex, setTabIndex] = useState(0);
  const localTime = GetCurrentDateTime();

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const text = form.text.value;

    const userInfo = {
      name,
      email,
      text,
      userImage: user?.photoURL,
      rating,
      description,
      review_date_time,
      localTime,
    };

    axiosPublic.post("/comment", userInfo).then((res) => {
      refetch();
      form.reset();
      if (res.data.insertedId) {
        toast.success("Thanks For Your Feedback");
      }
    });
  };

  return (
    <div className="mt-10 px-2 md:px-0">
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="border-none"
      >
        {/* --- Optimized Responsive Tab List --- */}
        <div className="border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar">
          <TabList className="flex flex-nowrap md:flex-wrap gap-2 md:gap-4 min-w-max md:min-w-full">
            {[
              { label: "Description", icon: <FaAlignLeft /> },
              { label: "Additional Info", icon: <FaInfoCircle /> },
              {
                label: `Reviews (${comment.length})`,
                icon: <FaRegCommentDots />,
              },
            ].map((tab, i) => (
              <Tab
                key={i}
                className={`flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 cursor-pointer outline-none transition-all duration-300 font-black uppercase text-[10px] md:text-xs tracking-widest border-b-4 whitespace-nowrap ${
                  tabIndex === i
                    ? "border-red-500 text-[#052c65]"
                    : "border-transparent text-slate-400 hover:text-[#052c65]"
                }`}
              >
                {tab.icon} {tab.label}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* --- Tab Panel: Description --- */}
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 animate-fadeIn">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-black text-[#052c65] uppercase tracking-tighter">
                Summary
              </h3>
              <p className="text-slate-500 leading-relaxed text-base md:text-lg">
                {description}
              </p>
            </div>
            <div className="bg-slate-50 p-6 md:p-8 rounded-[20px] md:rounded-[30px] border border-slate-100 shadow-inner">
              <h3 className="text-lg md:text-xl font-black text-[#052c65] uppercase tracking-tighter mb-4">
                Deep Dive
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {long_description}
              </p>
            </div>
          </div>
        </TabPanel>

        {/* --- Tab Panel: Additional Info --- */}
        <TabPanel>
          <div className="max-w-4xl animate-fadeIn overflow-hidden">
            <div className="rounded-[20px] md:rounded-[30px] border border-slate-100 bg-white overflow-x-auto">
              <table className="w-full text-left min-w-[300px]">
                <tbody>
                  {[
                    {
                      label: "Availability",
                      val: "In Stock",
                      highlight: "text-green-600",
                    },
                    { label: "Category", val: category },
                    { label: "Publish Date", val: publish_years },
                    { label: "Total Page", val: total_page },
                    { label: "Format", val: format },
                    { label: "Country", val: century },
                    { label: "Language", val: language },
                    { label: "Weight", val: "2.5 Pounds" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}
                    >
                      <td className="py-3 md:py-4 px-4 md:px-8 font-black text-[#052c65] uppercase text-[9px] md:text-[10px] tracking-widest w-1/2 md:w-1/3 border-b border-slate-100/50">
                        {row.label}
                      </td>
                      <td
                        className={`py-3 md:py-4 px-4 md:px-8 text-xs md:text-sm font-bold text-slate-500 border-b border-slate-100/50 ${row.highlight}`}
                      >
                        {row.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>

        {/* --- Tab Panel: Reviews --- */}
        <TabPanel>
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 animate-fadeIn">
            {/* Review List */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-black text-[#052c65] uppercase tracking-tighter mb-4 md:mb-8">
                What Readers Say
              </h3>

              {/* Static Author Review */}
              <div className="bg-white p-4 md:p-6 rounded-[20px] md:rounded-[25px] border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 md:gap-5 group">
                <img
                  src={author_img}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover shadow-lg group-hover:rotate-3 transition-transform"
                  alt=""
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                    <div>
                      <h4 className="font-black text-[#052c65] text-sm md:text-base">
                        {author_name}
                      </h4>
                      <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        {review_date_time}
                      </p>
                    </div>
                    <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm italic leading-relaxed">
                    "{description}"
                  </p>
                </div>
              </div>

              {/* Dynamic Comments */}
              <div className="space-y-6 pt-4">
                {comment.map((com) => (
                  <div
                    key={com._id}
                    className="flex gap-3 md:gap-4 border-l-2 border-slate-100 pl-4 md:pl-6 py-1 md:py-2"
                  >
                    <img
                      src={com.userImage || userImg}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl object-cover"
                      alt=""
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1 gap-2">
                        <h5 className="font-bold text-[#052c65] text-xs md:text-sm">
                          {com.name}
                        </h5>
                        <p className="text-[8px] md:text-[9px] text-slate-300 font-black uppercase tracking-widest whitespace-nowrap">
                          {com.localTime}
                        </p>
                      </div>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                        {com.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment Form - Optimized for Mobile */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="bg-[#052c65] p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl lg:sticky lg:top-20">
                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-2">
                  Leave Feedback
                </h3>
                <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 border-b border-white/10 pb-4">
                  Your email will not be published.
                </p>

                <form
                  id="myForm"
                  onSubmit={handleComment}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] md:text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border-none text-white rounded-xl md:rounded-2xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] md:text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border-none text-white rounded-xl md:rounded-2xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] md:text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">
                      Your Thoughts
                    </label>
                    <textarea
                      name="text"
                      className="w-full bg-white/5 border-none text-white rounded-xl md:rounded-2xl p-3 md:p-4 h-28 md:h-32 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-white hover:text-[#052c65] text-white font-black py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 uppercase tracking-widest text-[10px] md:text-xs shadow-xl shadow-red-950/20"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AddToComment;
