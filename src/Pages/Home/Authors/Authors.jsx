import { useEffect, useState } from "react";
import AuthorsCard from "./AuthorsCard";
import Container from "../../../component/common/Container";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://book-lovers-server.vercel.app/api/v1/authors")
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <div className="pt-12 ">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-[#052c65] uppercase tracking-tighter">
            Famous <span className="text-red-500">Authors</span> & Publishers
          </h1>
          <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-slate-500 font-medium max-w-lg mx-auto pt-2 text-sm md:text-base px-4">
            Meet the creative minds and prestigious publishers behind our vast
            collection of knowledge.
          </p>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {authors.map((author) => (
              <div key={author._id} className="flex justify-center">
                <AuthorsCard author={author} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Authors;
