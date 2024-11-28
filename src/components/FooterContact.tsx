import white_logo from "../assets/white_logo.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { LuMails } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

const FooterContact = () => {
  return (
    <div className="bg-slate-400 text-white flex lg:flex-row flex-col justify-center items-center">
      <div className="lg:w-[20%] w-[80%]">
        <img src={white_logo} className="w-[200px]" />
        <p className="w-[250px]">
          Uniyal Tour and Travel is the leading taxi service in Uttarakhand,
          operating since 2012. We maintain our vehicles in pristine condition,
          ensuring they are not only clean but also regularly sanitized for your
          safety.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-[20%]">
        <h4 className="text-2xl font-bold text-yellow-400 underline">
          Important Links
        </h4>
        <div className="flex items-center gap-2">
          <FaArrowCircleRight className="text-yellow-400" />
          <p>Home</p>
        </div>
        <div className="flex items-center gap-2">
          <FaArrowCircleRight className="text-yellow-400" />
          <p>About Us</p>
        </div>
        <div className="flex items-center gap-2">
          <FaArrowCircleRight className="text-yellow-400" />
          <p>Services</p>
        </div>
        <div className="flex items-center gap-2">
          <FaArrowCircleRight className="text-yellow-400" />
          <p>Contact Us</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[20%]">
        <h4 className="text-2xl font-bold text-yellow-400 underline">
          Contact Info
        </h4>
        <div className="flex items-center gap-2">
          <LuPhoneCall className="text-yellow-400" />
          <p>9675531176; 8859908016; 6398540110</p>
        </div>

        <div className="flex items-center gap-2">
          <LuMails className="text-yellow-400" />
          <p>praveshuniyal262@gmail.com</p>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineLocationOn className="text-yellow-400" />
          <p>
            Bhaniyawala near Jolly Grant Airport, Dehradun, Uttarakhand 248140
          </p>
        </div>
      </div>

      <div className="w-[20%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.4697145936916!2d78.18952227620538!3d30.195138511413997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390925cb4f7f8be5%3A0x7018c089cc1f61f7!2sJolly%20Grant%20Airport%20-%20Dehradun!5e0!3m2!1sen!2sin!4v1732721787108!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[400px] p-10"
        ></iframe>
      </div>
    </div>
  );
};

export default FooterContact;
