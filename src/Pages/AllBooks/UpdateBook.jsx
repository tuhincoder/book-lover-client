import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";

import useAxiosSecure from "../../hook/useAxiosSecure";

const UpdateBook = () => {
  const updateBook = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { _id, image, book_name, author_name, rating } = updateBook;

  const handleBookUpdate = (e) => {
    e.preventDefault();
    const form = e.target || "not available";
    const name = form.name?.value || "not available";
    const category = form.category?.value || "not available";
    const authorName = form.authorName?.value || "not available";
    const rating = form.rating?.value || "not available";
    const photo = form.photo?.value || "not available";

    const updateBook = {
      name,
      category,
      authorName,
      rating,
      photo,
    };

    axiosSecure.put(`/books/${_id}`, updateBook).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <Container>
      <HeaderText
        Heading={"Update This Book"}
        subHeading={"Update This Book"}
      ></HeaderText>
      <div>
        {/* <h1 className="text-4xl text-orange-400 text-center">Update Book:{book_name}</h1> */}
        <form onSubmit={handleBookUpdate} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={book_name}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>

              <select
                defaultValue="default"
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select book category
                </option>
                <option value="novel">Novel</option>
                <option value="Thriller">Thriller</option>
                <option value="History">History</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                type="text"
                defaultValue={author_name}
                className="input input-bordered"
                required
                name="authorName"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                defaultValue={rating}
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                required
                name="rating"
              />
            </div>
          </div>
          {/* img  */}
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              defaultValue={image}
              placeholder="Image URL"
              className="input input-bordered"
              required
              name="photo"
            />
          </div>

          <div className="form-control mt-6">
            {/* <button className="btn btn-primary">Login</button> */}
            <input
              className="btn btn-block btn-error text-xl text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default UpdateBook;
