import main_3 from "../assets/main_3.png";
import { LuPhoneCall } from "react-icons/lu";
import { LuMails } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import Request from "../components/Request";

const Contact = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${main_3})` }}
        className="h-[60vh] bg-cover bg-center duration-1000 flex justify-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-[70px] font-bold border-b-8 border-dotted border-b-black">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center md:flex-row flex-col m-10">
        <div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-yellow-400 underline">
              Contact Info
            </h4>
            <div className="flex items-center gap-2">
              <LuPhoneCall className="text-yellow-400 text-2xl" />
              <p>9675531176; 8859908016; 6398540110</p>
            </div>

            <div className="flex items-center gap-2">
              <LuMails className="text-yellow-400 text-2xl" />
              <p>praveshuniyal262@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineLocationOn className="text-yellow-400 text-2xl" />
              <p>
                Bhaniyawala near Jolly Grant Airport, Dehradun, Uttarakhand
                248140
              </p>
            </div>
          </div>
        </div>

        <Request />
      </div>
    </div>
  );
};

export default Contact;
