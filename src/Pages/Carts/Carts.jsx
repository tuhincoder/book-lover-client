import Swal from "sweetalert2";
import Container from "../../component/common/Container";
import useCarts from "../../hook/useCarts";
import Loader from "../../component/Loader/Loader";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { AiOutlineDelete } from "react-icons/ai";
import HeaderText from "../../component/common/HeaderText";

const Carts = () => {
  const [carts, refetch, isLoading] = useCarts();
  const axiosPublic = useAxiosPublic();

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove from cart?",
      text: "This item will be removed from your selection.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#052c65", // Navy
      cancelButtonColor: "#ef4444", // Red
      confirmButtonText: "Yes, delete it!",
      background: "#fff",
      customClass: {
        title: "font-black text-[#052c65]",
        confirmButton: "rounded-xl px-6 py-3",
        cancelButton: "rounded-xl px-6 py-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "The item has been removed.",
              icon: "success",
              confirmButtonColor: "#052c65",
            });
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] pb-20">
      <Container>
        {/* Header Section */}
        <div className="pt-10 mb-10">
          <HeaderText
            Heading={"My Shopping Cart"}
            subHeading={`You have ${carts.length} items in your bag`}
          />
        </div>

        <div className="bg-white rounded-[30px] shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            {carts.length ? (
              <table className="table w-full">
                {/* head */}
                <thead className="bg-[#052c65] text-white">
                  <tr>
                    <th className="py-5 pl-8 font-black uppercase tracking-widest text-[10px]">
                      #
                    </th>
                    <th className="font-black uppercase tracking-widest text-[10px]">
                      Item Image
                    </th>
                    <th className="font-black uppercase tracking-widest text-[10px]">
                      Book Name
                    </th>
                    <th className="font-black uppercase tracking-widest text-[10px]">
                      Price
                    </th>
                    <th className="font-black uppercase tracking-widest text-[10px] text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {carts.map((cart, index) => (
                    <tr
                      key={cart._id}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <th className="pl-8">
                        <span className="text-slate-400 font-bold">
                          {index + 1}
                        </span>
                      </th>
                      <td>
                        <div className="avatar py-2">
                          <div className="mask mask-squircle h-16 w-16 md:h-20 md:w-20 shadow-md group-hover:scale-105 transition-transform duration-300">
                            <img src={cart.bookImg} alt={cart.bookName} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-black text-[#052c65] uppercase tracking-tighter text-sm md:text-base">
                          {cart.bookName}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                          Premium Edition
                        </div>
                      </td>
                      <td>
                        <span className="font-black text-red-500 text-lg">
                          ${cart.price}
                        </span>
                      </td>
                      <th className="text-center">
                        <button
                          onClick={() => handleDelete(cart._id)}
                          className="btn btn-ghost btn-circle bg-red-50 hover:bg-red-500 group/btn transition-all duration-300"
                        >
                          <AiOutlineDelete className="text-xl text-red-500 group-hover/btn:text-white" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="py-20 text-center space-y-4">
                <div className="text-6xl text-slate-100 font-black">EMPTY</div>
                <p className="text-slate-400 font-bold uppercase tracking-[4px] text-xs italic">
                  No Data Available, Please Add To The Cart.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Optional Checkout Summary */}
        {carts.length > 0 && (
          <div className="mt-8 flex justify-end">
            <div className="bg-[#052c65] p-6 rounded-3xl text-white w-full md:w-80 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="uppercase text-[10px] font-black tracking-widest text-blue-200">
                  Total Items:
                </span>
                <span className="font-black">{carts.length}</span>
              </div>
              <button className="w-full bg-red-500 hover:bg-white hover:text-[#052c65] text-white font-black py-4 rounded-2xl transition-all duration-500 uppercase tracking-widest text-[10px]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Carts;
