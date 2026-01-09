import Swal from "sweetalert2";
import Container from "../../component/common/Container";
import useCarts from "../../hook/useCarts";
import Loader from "../../component/Loader/Loader";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { AiOutlineDelete } from "react-icons/ai";

const Carts = () => {
  const [carts, refetch, isLoading] = useCarts();
  const axiosPublic = useAxiosPublic();

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/carts/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your book has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Container>
        <div className="">
          <div className="overflow-x-auto">
            {carts.length ? (
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <th>#</th>
                      </label>
                    </th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart, count) => (
                    <tr key={cart._id}>
                      <th>
                        <label>{count + 1}</label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-24 w-24">
                              <img
                                src={cart.bookImg}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{cart.bookName}</td>
                      <td>{cart.price}</td>
                      <th>
                        <button
                          onClick={() => handleDelete(cart._id)}
                          className="btn btn-ghost "
                        >
                          <AiOutlineDelete className="text-2xl text-red-500" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center font-bold text-xl font-serif">
                No Data Available, Please Add To The Cart.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Carts;
