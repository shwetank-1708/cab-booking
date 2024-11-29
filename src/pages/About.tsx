import main_3 from "../assets/main_3.png";
import AboutSub from "../components/AboutSub";
import HomeServices from "../components/HomeServices";
import { FaEye } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${main_3})` }}
        className="h-[60vh] bg-cover bg-center duration-1000 flex justify-center"
      >
        <div className="flex flex-col justify-center items-center relative bg-black/60 w-full">
          <h1 className="text-black text-[70px] font-bold border-b-8 border-dotted border-b-white text-white">
            About Us
          </h1>
        </div>
      </div>

      <AboutSub />

      <div className="m-10">
        <div className="flex justify-center gap-8 text-center flex-col md:flex-row items-center">
          <div className="w-[70%] md:w-[300px] flex flex-col items-center border-2 rounded-2xl shadow-2xl bg-white p-2">
            <FaEye className="text-9xl text-yellow-300" />
            <HomeServices
              heading="Our Mission"
              para="To provide dependable transportation solutions with a focus on customer satisfaction, ensuring safety and comfort on every trip, while making a positive contribution to the communities we serve."
            />
          </div>
          <div className="w-[70%] md:w-[300px] flex flex-col items-center border-2 rounded-2xl shadow-2xl bg-white p-2">
            <GiArcheryTarget className="text-9xl text-yellow-300" />
            <HomeServices
              heading="Our Vision"
              para="To be the top choice for taxi services in Uttarakhand, known for our professionalism, reliability, and outstanding service, while continuously innovating to meet the changing needs of our customers."
            />
          </div>
          <div className="w-[70%] md:w-[300px] flex flex-col items-center border-2 rounded-2xl shadow-2xl bg-white p-2">
            <FaRegLightbulb className="text-9xl text-yellow-300" />
            <HomeServices
              heading="Core Values"
              para="We are committed to integrity, reliability, customer focus, safety, and continuous improvement, making these principles the foundation of our operations to deliver excellence in every service we provide."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
