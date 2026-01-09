/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";
import useAxiosPublic from "../hook/useAxiosPublic";

const OpenModal = ({ details }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { image, category, name, author_name, quantity } = details;

  const handleReturn = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.return.value;

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

    axiosPublic.post("/borrowed", borrowedBook).then((res) => {
      if (res.data.insertedId) {
        // Modal close korar jonno
        document.getElementById("my_modal_4").close();

        Swal.fire({
          icon: "success",
          title: "Book Borrowed!",
          text: `You have successfully borrowed ${name}`,
          confirmButtonColor: "#052c65",
        });
        form.reset();
      }
    });
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        className="w-full md:w-auto px-10 py-4 bg-[#052c65] text-white font-black rounded-2xl hover:bg-red-500 transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-blue-900/20"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Borrow This Book
      </button>

      {/* Modal Dialog */}
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 bg-white rounded-[30px] overflow-hidden border-none shadow-2xl">
          {/* Modal Header */}
          <div className="bg-[#052c65] p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter relative z-10">
              Borrow <span className="text-red-500">Book</span>
            </h1>
            <p className="text-white/60 text-xs mt-1 uppercase tracking-widest">
              Complete your request
            </p>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-2xl">
              <img
                src={image}
                alt={name}
                className="w-16 h-20 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="font-bold text-[#052c65] leading-tight">
                  {name}
                </h3>
                <p className="text-xs text-slate-400 font-medium italic">
                  by {author_name}
                </p>
              </div>
            </div>

            <form onSubmit={handleReturn} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-black text-[#052c65] uppercase tracking-widest text-xs">
                    Expected Return Date
                  </span>
                </label>
                <input
                  name="return"
                  type="date" // Better User Experience
                  className="input input-bordered w-full h-14 rounded-xl border-slate-200 focus:border-[#052c65] focus:outline-none bg-slate-50"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-black rounded-2xl transition-all shadow-lg uppercase tracking-widest text-sm"
                >
                  Confirm Borrow
                </button>

                <form method="dialog" className="w-full">
                  <button className="w-full py-2 text-slate-400 font-bold hover:text-[#052c65] transition-all text-xs uppercase tracking-widest">
                    Cancel Request
                  </button>
                </form>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OpenModal;
