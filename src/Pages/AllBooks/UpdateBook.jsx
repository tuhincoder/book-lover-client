import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import useAxiosSecure from "../../hook/useAxiosSecure";

const UpdateBook = () => {
  const updateBook = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    image,
    book_name,
    author_name,
    rating,
    category: currentCategory,
  } = updateBook;

  const handleBookUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const authorName = form.authorName.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updatedInfo = { name, category, authorName, rating, photo };

    axiosSecure.put(`/books/${_id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Book Updated!",
          showConfirmButton: false,
          timer: 1500,
          background: "#052c65",
          color: "#fff",
        });
      }
    });
  };

  // Modern Input Design
  const inputClass =
    "w-full bg-slate-100/50 border-2 border-transparent rounded-xl px-4 py-3 text-[#052c65] font-semibold focus:border-red-500 focus:bg-white outline-none transition-all duration-300 text-sm md:text-base";
  const labelClass =
    "text-[10px] md:text-[11px] font-black text-[#052c65]/60 uppercase tracking-widest ml-1 mb-1 block";

  return (
    <div className="bg-[#fcfcfd] min-h-screen py-3 ">
      <Container>
        {/* Header - Mobile friendly size */}
        <div className="mb-8 md:mb-12">
          <HeaderText
            Heading={"Update Book"}
            subHeading={"Edit records instantly"}
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-5 md:p-10 rounded-[25px] md:rounded-[40px] shadow-2xl shadow-slate-200/60 border border-slate-50">
            <form
              onSubmit={handleBookUpdate}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Book Name */}
                <div>
                  <label className={labelClass}>Book Name</label>
                  <input
                    type="text"
                    defaultValue={book_name}
                    name="name"
                    className={inputClass}
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className={labelClass}>Category</label>
                  <select
                    name="category"
                    defaultValue={currentCategory || "default"}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option disabled value="default">
                      Select Category
                    </option>
                    <option value="novel">Novel</option>
                    <option value="Thriller">Thriller</option>
                    <option value="History">History</option>
                    <option value="Drama">Drama</option>
                  </select>
                </div>

                {/* Author Name */}
                <div>
                  <label className={labelClass}>Author Name</label>
                  <input
                    type="text"
                    defaultValue={author_name}
                    name="authorName"
                    className={inputClass}
                    required
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className={labelClass}>Rating (1-5)</label>
                  <input
                    defaultValue={rating}
                    type="text"
                    name="rating"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Image URL - Full Width */}
              <div>
                <label className={labelClass}>Cover Image URL</label>
                <input
                  type="text"
                  defaultValue={image}
                  name="photo"
                  className={inputClass}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#052c65] hover:bg-red-500 text-white font-black py-3.5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 uppercase tracking-widest text-[10px] md:text-xs shadow-lg shadow-blue-900/20 active:scale-[0.98]"
                >
                  Update Records
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateBook;
