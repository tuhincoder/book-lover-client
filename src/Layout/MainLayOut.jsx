import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import TopNavbar from "../component/utils/TopNavbar/TopNavbar";
import ScrollToTop from "../component/ScrollToTop";

const MainLayOut = () => {
  return (
    <div>
      <ScrollToTop />
      <TopNavbar />
      <Navbar />

      <div className="max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
