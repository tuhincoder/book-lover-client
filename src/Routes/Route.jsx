import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import BookCategory from "../Pages/Home/Books/BookCategory";
import BookDetails from "../Pages/Home/Books/BookDetails";
import PrivetRout from "./PrivetRout";
import ReadDetails from "../Pages/Home/Books/ReadDetails";
import UpdateBook from "../Pages/AllBooks/UpdateBook";
import About from "../Pages/About/About";
import AddToCartDetails from "../Pages/AddToCartDetails/AddToCartDetails";
import Carts from "../Pages/Carts/Carts";
import LiveChat from "../Pages/LiveChat/LiveChat";
import RegisterNow from "../Pages/Home/RegisterNow/RegisterNow";
import BookingRegistration from "../Pages/BookingRegistration/BookingRegistration";
import ShoppingBook from "../Pages/ShoppingBook/ShoppingBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },

      {
        path: "/bookCategories/:category",
        element: <BookCategory></BookCategory>,
      },
      {
        path: "/addToCartDetails/:id",
        element: <AddToCartDetails />,
        loader: ({ params }) =>
          fetch(`https://book-lovers-server.vercel.app/topBooks/${params.id}`),
      },
      {
        path: "/categoryBookDetails/:id",
        element: (
          <PrivetRout>
            <BookDetails></BookDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`https://book-lovers-server.vercel.app/books/${params.id}`),
      },
      {
        path: "/readDetails/:id",
        element: <ReadDetails></ReadDetails>,
        loader: ({ params }) =>
          fetch(`https://book-lovers-server.vercel.app/books/${params.id}`),
      },

      {
        path: "/allBook",
        element: <AllBooks />,
      },
      {
        path: "updateAllBook/:id",
        element: (
          <PrivetRout>
            <UpdateBook></UpdateBook>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`https://book-lovers-server.vercel.app/books/${params.id}`),
      },
      {
        path: "/borrowedBook",
        element: (
          <PrivetRout>
            <BorrowedBooks />
          </PrivetRout>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/liveChat",
        element: <LiveChat />,
      },
      {
        path: "/registerNow",
        element: <RegisterNow />,
      },
      {
        path: "/bookingRegistration",
        element: <BookingRegistration />,
      },
      {
        path: "/shopping",
        element: <ShoppingBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
