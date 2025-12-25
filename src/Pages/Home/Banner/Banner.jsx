import { Link } from 'react-router-dom';
import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../assets/images/banner/banner3.jpg'


const Banner = () => {
    return (

        <div className=''>

            <div className="carousel w-full overflow-hidden h-[350px]  md:h-[500px] ">
                {/* slide1 */}
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={banner1} className="md:w-full rounded-b-lg md:h-[500px] object-cover" />

                    {/* --- */}
                    <div className="absolute hidden lg:block flex transform -translate-y-1/2 bottom-5 right-5 ">
                        <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-error ">❯</a>
                    </div>
                    {/* --- */}

                </div>

                {/* slide text1 */}
                <div className="">
                    <div className='text-white space-y-5  text-center mt-5 '>
                        <h4 className='text-lg font-bold'>Choose Your Book</h4>
                        {/* <h1 className=' '>Find Books For <br /> All Ages</h1> */}

                        <button className="btn  hover:bg-white btn-error font-bold   mt-8">Discover Your Next Book</button>

                    </div>
                </div>







                {/* slide2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex transform -translate-y-1/2 bottom-5 right-5 ">
                        <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-error ">❯</a>
                    </div>
                </div>
                {/* slide text2 */}
                <div className="absolute  w-full flex justify-center  ">
                    <div className='text-white space-y-5  text-center mt-5 '>
                        <h4 className='text-lg font-bold'>Choose Your Book</h4>
                        <h1 className='text-6xl'>Find Books For <br /> All Ages</h1>
                        <button className="btn hover:bg-white btn-error font-bold  mt-8">Discover Your Next Book</button>
                    </div>
                </div>
                {/* slide3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />

                    <div className="absolute flex transform -translate-y-1/2 bottom-5 right-5 ">
                        <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-error ">❯</a>
                    </div>
                </div>
                {/* slide text3 */}
                <div className="absolute  w-full flex justify-center  ">
                    <div className='text-white space-y-5  text-center mt-5 '>
                        <h4 className='text-lg font-bold'>Choose Your Book</h4>
                        <h1 className='text-6xl'>Find Books For <br /> All Ages</h1>
                        <button className="btn hover:bg-white btn-error font-bold  mt-8">Discover Your Next Book</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;