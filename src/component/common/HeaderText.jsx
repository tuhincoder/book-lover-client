/* eslint-disable react/prop-types */

const HeaderText = ({ Heading, subHeading }) => {
  return (
    <div className="">
      <div className="relative my-10 flex font-serif flex-col items-center">
        <h1 className=" text-2xl md:text-5xl md:font-medium z-10 ">
          {Heading}
        </h1>
        <h1 className="hidden absolute text text-2xl italic font-serif md:text-8xl opacity-35 text-gray-300 bottom-0 ">
          {subHeading}
        </h1>
      </div>
    </div>
  );
};

export default HeaderText;
