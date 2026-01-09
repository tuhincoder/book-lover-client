/* eslint-disable react/prop-types */
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const AuthorsCard = ({ author }) => {
  const { image, author_name } = author;

  return (
    <div className="group relative w-full max-w-[300px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
      <div className="relative h-[350px] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={author_name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#052c65] via-transparent to-transparent opacity-80 group-hover:bg-[#052c65]/90 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4">
            {author_name}
          </h2>

          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <button className="w-10 h-10 rounded-full bg-white text-[#052c65] hover:bg-red-500 hover:text-white flex items-center justify-center text-xl transition-colors duration-300 shadow-lg">
              <AiOutlineTwitter />
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-[#052c65] hover:bg-red-500 hover:text-white flex items-center justify-center text-xl transition-colors duration-300 shadow-lg">
              <AiFillInstagram />
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-[#052c65] hover:bg-red-500 hover:text-white flex items-center justify-center text-xl transition-colors duration-300 shadow-lg">
              <AiFillFacebook />
            </button>
          </div>

          <div className="w-12 h-1 bg-red-500 mt-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsCard;
