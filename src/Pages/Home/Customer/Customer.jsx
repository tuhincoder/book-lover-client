// import Container from "../../../component/common/Container";
// import HeaderText from "../../../component/common/HeaderText";
// import customerImg from '../../../assets/images/bookDetails/book3.jpg'
// import customerImg2 from '../../../assets/images/bookDetails/book4.jpg'
// import { useState } from "react";

// const Customer = () => {
//     const [fold, setFold] = useState(true)
//     return (
//         <Container>
//             <HeaderText Heading={'Customer Reviews'} subHeading={'Our Customer Says'} />

//             <div className="flex flex-col md:flex-row gap-10 bg-gradient-to-r from-gray-200 to-red-200 rounded-lg md:py-24 px-16 mb-16 md:mb-5 ">
//                 <div className="flex items-center pr-14">
//                     <div className="hidden lg:block">
//                         <h1 className="text-xl font-medium"> Do you have any specific testimonials or feedback <br /> you&apos;d like to include</h1>
//                         <p>Popular has been a fantastic resource for me and my family. The selection of books is impressive, ranging from the latest bestsellers to classic literature. The staff is always friendly and eager to help with any questions or recommendations. The online catalog is user-friendly, making it easy to reserve books and check their availability. I also appreciate the various events and programs they offer, which have been both educational and entertaining for my kids. Highly recommend!</p>
//                     </div>
//                 </div>
//                 {/* card content */}
//                 <div className="relative">
//                     {/* review1 */}
//                     <div className="relative bg-white p-6 opacity-40 rounded-lg  space-y-2 md:w-[500px]">
//                         <img className=" border-4 h-12 border-white absolute -left-4 -top-4 w-12  rounded-full" src={customerImg2} alt="" />

//                         <p>The Silent Patient is a must-read, and I&apos;m so glad I found it on <b>Poplar Library</b>. The storytelling is impeccable, with a gripping narrative that keeps you hooked till the very end.!</p>
//                         <h2 className="text-2xl">Jane Smith</h2>
//                         <p>Web developer</p>
//                     </div>
//                     {/* review2 */}
//                     <div className="absolute top-32 -left-10 md:-left-20  md:w-[500px] z-40 bg-white p-6 rounded-lg  space-y-2">
//                         <img className=" border-4 h-12 border-white absolute -left-4 -top-4 w-12  rounded-full" src={customerImg} alt="" />

//                         <p>I recently read The Silent Patient from <b>popular Library</b>, and it was absolutely captivating! The plot twists kept me on the edge of my seat, and I could&apos;nt put it down...
//                             {
//                                 fold ? (
//                                     <>

//                                         <span onClick={() => setFold(
//                                             !fold)} className="text-blue-600 cursor-pointer font-medium text-lg">Read more....</span>
//                                     </>
//                                 )
//                                     :
//                                     (
//                                         <>
//                                             <p> The psychological depth of the characters, especially Alicia, was fascinating. The way the story unfolded was both thrilling and unexpected. I highly recommend this book to anyone who enjoys psychological thrillers. Thanks to Popular Library for making it so easy to find and access such a great read!</p>
//                                             <span onClick={() => setFold(
//                                                 !fold)} className="text-blue-600 cursor-pointer font-medium text-lg">Read lease..</span>
//                                         </>
//                                     )
//                             }

//                         </p>
//                         <h2 className="text-2xl">Jane Smith</h2>
//                         <p>Web developer</p>
//                     </div>
//                     {/* review3 */}
//                     <div className="relative opacity-40 top-7 bg-white p-6 rounded-lg  space-y-2 md:w-[500px]">
//                         <img className=" border-4 h-12 border-white absolute -left-4 -top-4 w-12  rounded-full" src={customerImg} alt="" />

//                         <p>I recently read The Silent Patient from <b>popular Library</b>, <span className="hidden lg:block">and it was absolutely captivating! The plot twists kept me on the edge of my seat, and I could&apos;nt put it down.</span>  !</p>
//                         <h2 className="md:text-2xl">Emily Johnson</h2>
//                         <p>Frond-end Developer</p>
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default Customer;

//-----------------------------------------
// import Container from "../../../component/common/Container";
import customerImg from "../../../assets/images/bookDetails/book3.jpg";
import customerImg2 from "../../../assets/images/bookDetails/book4.jpg";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Customer = () => {
  const [fold, setFold] = useState(true);

  return (
    // <Container>
    <div className="pt-10">
      {/* Header Section */}
      <div className="text-center mb-8 space-y-3">
        <h2 className="text-3xl md:text-5xl font-black text-[#052c65] uppercase tracking-tighter">
          Customer <span className="text-red-500">Reviews</span>
        </h2>
        <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 font-medium">
          What our readers say about their experience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#052c65] rounded-[40px] p-8 md:p-20 relative overflow-hidden shadow-2xl">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

        {/* Left Side: Main Feedback */}
        <div className="flex-1 text-white space-y-6 z-10">
          <FaQuoteLeft className="text-red-500 text-5xl opacity-50" />
          <h1 className="text-2xl md:text-4xl font-bold leading-tight uppercase tracking-tight">
            Providing a fantastic resource <br /> for readers and families.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed font-light italic">
            "The selection of books is impressive, ranging from latest
            bestsellers to classics. The staff is friendly and the online
            catalog is incredibly user-friendly."
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="h-1 w-20 bg-red-500"></div>
            <span className="text-sm uppercase tracking-widest font-bold">
              Testimonials
            </span>
          </div>
        </div>

        {/* Right Side: Stacked Review Cards */}
        <div className="flex-1 w-full space-y-6 z-10">
          {/* Review Card 1 (Main Focus) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl transform lg:-rotate-2 hover:rotate-0 transition-all duration-500 border-l-8 border-red-500">
            <div className="flex items-start gap-4 mb-4">
              <img
                className="w-14 h-14 rounded-full object-cover border-2 border-red-100"
                src={customerImg}
                alt="Jane"
              />
              <div>
                <h2 className="text-xl font-black text-[#052c65]">
                  Jane Smith
                </h2>
                <p className="text-red-500 text-xs font-bold uppercase tracking-wider">
                  Web Developer
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              I recently read The Silent Patient from{" "}
              <b className="text-[#052c65]">Popular Library</b>, and it was
              absolutely captivating!
              {!fold && (
                <span className="transition-all duration-500">
                  {" "}
                  The psychological depth of the characters, especially Alicia,
                  was fascinating. The way the story unfolded was both thrilling
                  and unexpected.
                </span>
              )}
              <button
                onClick={() => setFold(!fold)}
                className="ml-2 text-red-500 font-bold hover:underline"
              >
                {fold ? "Read more..." : "Show less"}
              </button>
            </p>
          </div>

          {/* Review Card 2 (Secondary) - Hidden on small mobile or simplified */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 hidden md:block">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover grayscale"
                src={customerImg2}
                alt="Emily"
              />
              <div>
                <h2 className="text-lg font-bold text-white">Emily Johnson</h2>
                <p className="text-slate-400 text-xs uppercase">
                  Front-end Developer
                </p>
              </div>
              <div className="ml-auto text-yellow-400 flex text-sm">
                ★ ★ ★ ★ ★
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default Customer;
