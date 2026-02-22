import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaQuoteLeft,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
// import Container from "../../../component/common/Container";
import HeaderText from "../../../component/common/HeaderText";

const ReadDetails = () => {
  const bookDetails = useLoaderData();
  const { image, category, name, author_name, description } = bookDetails;

  const listArray = [
    { label: "Category", value: category },
    { label: "Author", value: author_name },
    { label: "Status", value: "Available" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* <Container> */}
      <div className="pt-10">
        <HeaderText
          Heading={"Book Reader View"}
          subHeading={"Detailed Information"}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[30px] shadow-sm border border-slate-100 overflow-hidden">
            {/* Featured Image */}
            <div className="relative group overflow-hidden">
              <img
                className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
                src={image}
                alt={name}
              />
              <div className="absolute top-6 left-6">
                <span className="bg-red-500 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg">
                  {category}
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-8 md:p-16">
              <h1 className="text-4xl md:text-6xl font-black text-[#052c65] mb-8 tracking-tighter leading-none">
                {name}
              </h1>

              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#052c65] flex items-center justify-center text-white font-bold">
                  {author_name?.charAt(0)}
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                    Written By
                  </p>
                  <p className="text-[#052c65] font-black">{author_name}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-slate-800 leading-normal italic border-l-4 border-red-500 pl-6 py-2">
                  {description}
                </p>

                <p>
                  In the vast expanse of human experience, amidst the tapestry
                  of emotions, adventures, and discoveries, lies the essence of
                  our stories. From the quiet corners of introspection to the
                  thunderous clash of epic battles, literature serves as a
                  beacon, guiding us through the labyrinth of existence.
                </p>

                <div className="bg-slate-50 p-10 rounded-[20px] relative my-12">
                  <FaQuoteLeft className="text-red-200 text-6xl absolute top-6 left-6" />
                  <p className="relative z-10 text-2xl font-serif text-[#052c65] italic">
                    "A book is a dream that you hold in your hands. Through the
                    written word, we traverse distant lands and unlock the
                    secrets of our own souls."
                  </p>
                </div>

                <p>
                  Each page turned is a journey embarked upon, a doorway opened
                  to new worlds and possibilities. Within these bound volumes,
                  we find solace, inspiration, and the timeless wisdom of
                  generations past. For in the pages of books, we discover not
                  only the stories of others but also the echoes of our own
                  souls.
                </p>
              </div>

              {/* Social Sharing */}
              <div className="mt-16 pt-10 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-[#052c65] font-black uppercase tracking-widest text-xs mr-4">
                    Share this masterpiece:
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                    <FaFacebookF /> Facebook
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                    <FaTwitter /> Twitter
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                    <FaLinkedinIn /> LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#052c65] p-8 rounded-[30px] text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl transition-all group-hover:scale-150"></div>

            <h3 className="text-xl font-black uppercase tracking-tighter mb-8">
              Quick Specs
            </h3>

            <ul className="space-y-6">
              {listArray.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col border-b border-white/10 pb-4"
                >
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    {item.label}
                  </span>
                  <span className="font-bold text-lg text-white">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 py-4 bg-red-500 hover:bg-red-600 text-white font-black rounded-2xl transition-all shadow-lg uppercase tracking-widest text-xs">
              Purchase Copy
            </button>
          </div>

          <div className="bg-white p-8 rounded-[30px] border border-slate-100 shadow-sm space-y-6">
            <div className="w-16 h-16 bg-red-50 flex items-center justify-center rounded-2xl">
              <svg
                width={35}
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ef4444"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
                ></path>
              </svg>
            </div>
            <h4 className="text-xl font-black text-[#052c65] uppercase tracking-tighter leading-tight">
              Popular Library: The Reading Nook
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              A cozy 500 sq. ft. room nestled in the quiet East Wing. Perfect
              for focus with 20 comfortable seats and high-speed Wi-Fi.
            </p>
            <div className="pt-4 space-y-3">
              <button className="w-full py-4 bg-slate-100 text-[#052c65] font-black rounded-2xl hover:bg-[#052c65] hover:text-white transition-all text-xs uppercase tracking-widest">
                Redeem Now
              </button>
              <button className="w-full py-2 text-slate-400 font-bold hover:text-red-500 transition-all text-xs uppercase">
                Redeem Later
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default ReadDetails;
