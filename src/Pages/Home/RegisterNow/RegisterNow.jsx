import Container from "../../../component/common/Container";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useRegistration from "../../../hook/useRegistration";

const RegisterNow = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useRegistration();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      const form = e.target;
      // const firstName = form.name.value;
      // const lastName = form.lastName.value;a
      const name = user?.displayName;
      const email = form.email.value;
      const phone = form.phone.value;
      const date = form.date.value;
      const text = form.text.value;
      const formInfo = {
        // firstName,
        // lastName,
        name,
        email,
        phone,
        date,
        text,
      };
      console.log(formInfo);
      axiosPublic.post("/registerForm", formInfo).then((res) => {
        if (res.data.insertedId) {
          refetch();
          document.getElementById("formId").reset();
          Swal.fire({
            title: "Confirm registration!",
            text: "Your request is accepted.",
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please LogIn?",
        text: "You are not login, after login than submit form!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <Container>
      <div>
        <div>
          <div className="text-center">
            <h1 className="text-[#052c65] text-xl md:text-3xl font-bold font-serif">
              Ready To Get Started?
            </h1>
            <p className="text-gray-500">
              Our Popular Library offers a wide range of books and resources for
              all ages.
            </p>
          </div>

          <form id="formId" onSubmit={handleSubmit} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">First Name*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="First "
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name*</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last "
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Candidate Email*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Candidate Phone*</span>
                </label>
                <input
                  name="phone"
                  type="number"
                  placeholder="phone number"
                  className="input input-bordered "
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  What&apos;s your availability date:*
                </span>
              </label>
              <input
                name="date"
                type="date"
                className="input input-bordered "
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">
                  please share your farming experience*
                </span>
              </label>
              <textarea
                name="text"
                className="textarea textarea-bordered w-full h-[150px]"
                placeholder="Write Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Login</button> */}
              <input
                type="submit"
                value="Send Message"
                className="btn bg-[#052c65] text-white hover:text-black"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterNow;
