import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
// import Container from "../../component/common/Container";
import HeaderText from "../../component/common/HeaderText";
import useAxiosSecure from "../../hook/useAxiosSecure";

const AddBook = () => {
  // const books = useLoaderData()
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target || "not available";
    const name = form.name?.value || "not available";
    const category = form.category?.value || "not available";
    const authorName = form.authorName?.value || "not available";
    const quantity = form.quantity?.value || "not available";
    const description = form.description?.value || "not available";
    const rating = form.rating?.value || "not available";
    const photo = form.photo?.value || "not available";
    const email = user?.email;
    const addBook = {
      name,
      // image,
      email,
      category,
      authorName,
      quantity,
      description,
      rating,
      photo,
    };
    console.log(addBook);
    axiosSecure.post("/books", addBook).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "book order successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    // <Container>
    <>
      <HeaderText Heading={"Add Book"} subHeading={"Add Book"}></HeaderText>
      <div>
        <form onSubmit={handleBookSubmit} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
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
                className="input input-bordered"
                required
                name="authorName"
                placeholder="Author name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity Of The Book</span>
              </label>
              <input
                type="text"
                placeholder="Quantity"
                className="input input-bordered"
                required
                name="quantity"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                required
                name="description"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
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
    </>
    // </Container>
  );
};

export default AddBook;
