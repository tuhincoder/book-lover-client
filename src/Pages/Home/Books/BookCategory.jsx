/* eslint-disable no-undef */
import { useParams } from "react-router-dom";

import CategoryBook from "../../AllBooks/CategoryBook";
import useCateBooks from "../../../hook/useCateBooks";
// import Container from "../../../component/common/Container";
import Loader from "../../../component/Loader/Loader";
import HeaderText from "../../../component/common/HeaderText";

const BookCategory = () => {
  const [categoriesBook, isLoading] = useCateBooks();

  const { category } = useParams();

  const categoryBook = categoriesBook.filter(
    (item) => item.category === category
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    // <Container>
    <>
      <HeaderText
        Heading={"Each Category Books"}
        subHeading={"Your favourite Books"}
      ></HeaderText>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3  ">
        {categoryBook.map((cat, index) => (
          <CategoryBook key={index} cat={cat}></CategoryBook>
        ))}
      </div>
    </>
    // </Container>
  );
};

export default BookCategory;
