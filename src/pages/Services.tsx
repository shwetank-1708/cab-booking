import { useState, useEffect } from "react";
import main_1 from "../assets/main_1.png";
import main_2 from "../assets/main_2.png";
import main_3 from "../assets/main_3.png";
import main_4 from "../assets/main_4.png";
import main_5 from "../assets/main_5.png";
import main_6 from "../assets/main_6.png";
import Destinations from "../components/Destinations";
import Title from "../components/Title";
import destination_1 from "../assets/destination_1.png";
import destination_2 from "../assets/destination_2.png";
import destination_3 from "../assets/destination_3.png";
import destination_4 from "../assets/destination_4.png";
import destination_5 from "../assets/destination_5.png";
import destination_6 from "../assets/destination_6.png";
import destination_7 from "../assets/destination_7.png";
import destination_8 from "../assets/destination_8.png";
import destination_9 from "../assets/destination_9.png";
import CallSupport from "../components/CallSupport";

const Services = () => {
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
            Destinations
          </h1>
        </div>
      </div>

      <div>
        <Title heading="TOP DESTINATIONS" />
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 text-center">
          <div className="w-[350px]">
            <img src={destination_1} />
            <Destinations
              heading="Dehradun to Jolly Grant Airport"
              para="Enjoy seamless transfers to and from Jolly Grant Airport with our punctual Dehradun taxi service. Whether for a spiritual retreat in Rishikesh or departing after exploring Uttarakhand, our dedicated drivers ensure a comfortable journey."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_2} />
            <Destinations
              heading="Dehradun to New Delhi Airport"
              para="Commence or conclude your journey seamlessly with our efficient pick and drop taxi service to and from Delhi Airport. With punctual drivers and well-maintained vehicles, we ensure timely arrivals, granting you peace of mind during travel."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_3} />
            <Destinations
              heading="Dehradun to Himachal Pradesh"
              para="Embark on a journey to Himachal Pradesh's scenic wonders with our secure Dehradun taxi service. Explore Shimla, Manali, or trek the Himalayas with our experienced drivers for a memorable trip amidst breathtaking vistas."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_4} />
            <Destinations
              heading="Dehradun to Mussoorie"
              para="Enjoy a scenic drive from Dehradun to the picturesque hill station of Mussoorie, nestled amidst the lush greenery of the Himalayas."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_5} />
            <Destinations
              heading="Dehradun to Rishikesh"
              para="Dive into the spiritual ambiance of Rishikesh, known as the Yoga Capital of the World, with our hassle-free taxi service from Doon."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_6} />
            <Destinations
              heading="Dehradun to Haridwar"
              para="Embark on a soulful journey to the sacred city of Haridwar, where the Ganges River flows in all its divine glory."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_7} />
            <Destinations
              heading="Dehradun to Delhi"
              para="Travel between the vibrant city of Delhi and the serene landscapes of Dehradun with ease and convenience using our trusted taxi service."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_8} />
            <Destinations
              heading="Dehradun to Haryana"
              para="xplore Haryana's essence with our dependable Dehradun taxi service. From historic Kurukshetra to urban Gurgaon, enjoy safe and stress-free travel to your destination."
            />
          </div>
          <div className="w-[350px]">
            <img src={destination_9} />
            <Destinations
              heading="Dehradun to Jaipur"
              para="Our experienced drivers guarantee a comfortable journey, allowing you to explore majestic forts, bustling bazaars, and rich heritage sites stress-free."
            />
          </div>
        </div>
      </div>

      <CallSupport />
    </div>
  );
};

export default Services;
