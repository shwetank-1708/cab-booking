import { useState, useEffect } from "react";
import main_1 from "../assets/main_1.png";
import main_2 from "../assets/main_2.png";
import main_3 from "../assets/main_3.png";
import main_4 from "../assets/main_4.png";
import main_5 from "../assets/main_5.png";
import main_6 from "../assets/main_6.png";
import HomeServices from "../components/HomeServices";
import { FaCarAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaRoad } from "react-icons/fa";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: main_1,
    },
    {
      url: main_2,
    },
    {
      url: main_3,
    },
    {
      url: main_4,
    },
    {
      url: main_5,
    },
    {
      url: main_6,
    },
  ];

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? slides.length - 1 : prevIndex - 1
  //   );
  // };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-[60vh] bg-cover bg-center duration-1000 flex justify-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-[70px] font-bold border-b-8 border-dotted border-b-black">
            Uniyal Tour and Travel
          </h1>
          <p className="text-black text-[40px] font-bold">
            Easy Online Taxi Booking Service in Uttarakhand
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center gap-8 text-center ">
          <div className="w-[300px] flex flex-col items-center border-2 rounded-2xl shadow-2xl">
            <FaCarAlt className="text-9xl text-blue-950" />
            <HomeServices
              heading="TOP-RATED SERVICE"
              para="We're proud to be rated the best in the city, delivering top-quality service every time."
            />
          </div>
          <div className="w-[300px] flex flex-col items-center border-2 rounded-2xl shadow-2xl">
            <RiMoneyRupeeCircleFill className="text-9xl text-blue-950" />
            <HomeServices
              heading="EXCLUSIVE DISCOUNTS"
              para="Enjoy special offers and exclusive discounts for our loyal customers."
            />
          </div>
          <div className="w-[300px] flex flex-col items-center border-2 rounded-2xl shadow-2x">
            <FaRoad className="text-9xl text-blue-950" />
            <HomeServices
              heading="EASY BOOKING"
              para="Our booking process makes reserving a text quick and hassle-free."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
