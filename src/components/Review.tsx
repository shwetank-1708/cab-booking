import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    review:
      "I had a great experience with Uniyal Tour and Travel. The driver was professional, and the cab was spotless. I felt safe and comfortable throughout the journey. They are definitely the best taxi service provider in Uttarakhand and beyond!",
    name: "Rohit Rastogi",
  },

  {
    review:
      "From booking to drop-off, everything was seamless. The driver was experienced and polite, and the cab was in excellent condition. I’ve traveled with many taxi services, but Uniyal Tour and Travel stands out as the best in India.",
    name: "Chander Kumar",
  },

  {
    review:
      "I used Uniyal Tour and Travel for my trip to the hill stations, and I was absolutely happy with their service. The driver was knowledgeable, the cab was pristine, and the entire journey was incredibly comfortable. They truly offer the best taxi service.",
    name: "Sneha Pal",
  },

  {
    review:
      "Uniyal Tour and Travel exceeded my expectations. The driver was punctual and courteous, and the cab was neat and clean. Their service was smooth, making my trip across Uttarakhand a breeze. Will surely book with them again!",
    name: "Manmohan Mishra",
  },

  {
    review:
      "Uniyal Tour and Travel provided me with a clean and well-maintained vehicle along with a very skilled driver. The journey was smooth and enjoyable, and their prices are fair. Hands down the best taxi service provider I’ve come across in India.",
    name: "Animesh Thapa",
  },

  {
    review:
      "I had a great experience with Uniyal Tour and Travel. The driver was professional, and the cab was spotless. I felt safe and comfortable throughout the journey. They are definitely the best taxi service provider in Uttarakhand and beyond!",
    name: "Rohit Rastogi",
  },

  {
    review:
      "From booking to drop-off, everything was seamless. The driver was experienced and polite, and the cab was in excellent condition. I’ve traveled with many taxi services, but Uniyal Tour and Travel stands out as the best in India.",
    name: "Chander Kumar",
  },

  {
    review:
      "I used Uniyal Tour and Travel for my trip to the hill stations, and I was absolutely happy with their service. The driver was knowledgeable, the cab was pristine, and the entire journey was incredibly comfortable. They truly offer the best taxi service.",
    name: "Sneha Pal",
  },

  {
    review:
      "Uniyal Tour and Travel exceeded my expectations. The driver was punctual and courteous, and the cab was neat and clean. Their service was smooth, making my trip across Uttarakhand a breeze. Will surely book with them again!",
    name: "Manmohan Mishra",
  },

  {
    review:
      "Uniyal Tour and Travel provided me with a clean and well-maintained vehicle along with a very skilled driver. The journey was smooth and enjoyable, and their prices are fair. Hands down the best taxi service provider I’ve come across in India.",
    name: "Animesh Thapa",
  },
];

const Review = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="xl:w-3/4 w-[100%] m-auto">
      <div className="m-10">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="border-2 shadow-2xl rounded-2xl min-h-[250px] flex flex-col items-center justify-center p-4 text-center"
            >
              {" "}
              <p>{d.review}</p>
              <p className="p-4 font-bold text-2xl">{d.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
