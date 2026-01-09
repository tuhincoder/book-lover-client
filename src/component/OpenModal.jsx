/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";
import useAxiosPublic from "../hook/useAxiosPublic";

const OpenModal = ({ details }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { image, category, name, author_name, quantity } = details;
  console.log(details);

  const handleReturn = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.return.value || "no return date";
    const borrowedBook = {
      date,
      image,
      category,
      name,
      author_name,
      quantity,
      email: user?.email,
      userName: user?.displayName,
    };
    console.log(borrowedBook);
    axiosPublic.post("/borrowed", borrowedBook).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your ${name} book has been Borrowed`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
    // console.log(date);
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn   md:ml-16 hover:bg-orange-300 hover:text-black md:uppercase"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Borrow This Book
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-3/4 md:w-1/4 max-w-5xl ">
          <h1 className="  md:text-2xl text-center text-sky-400 font-serif">
            Please Borrow this Book
          </h1>
          <div className="divider"></div>
          <form onSubmit={handleReturn}>
            <div className="form-control">
              <h2 className="text-xl mb-1 text-neutral-700 font-serif">
                {" "}
                Return Date
              </h2>
              <input
                name="return"
                type="text"
                placeholder="Return date"
                className="input input-bordered"
                required
              />
            </div>

            <button className="btn  bg-red-300 border font-serif text-center mt-4">
              submit
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OpenModal;
