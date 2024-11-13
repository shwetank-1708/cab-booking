import { FaRegAddressBook } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoCall } from "react-icons/io5";

const Head = () => {
  return (
    <>
      <div className="flex justify-center bg-black ">
        <div className="flex justify-around h-11 w-[70%]">
          <div className="flex gap-2 items-center">
            <FaRegAddressBook className="text-yellow-300" />
            <p className="text-white">Dehradun, Uttarakhand</p>
          </div>

          <div className="flex gap-2 items-center">
            <LuMail className="text-yellow-300" />
            <p className="text-white">Dpraveshuniyal262@gmail.com</p>
          </div>

          <div className="flex gap-2 items-center">
            <IoCall className="text-yellow-300" />
            <p className="text-white">9675531176</p>
          </div>

          <div className="flex gap-2 items-center">
            <IoCall className="text-yellow-300" />
            <p className="text-white">8859908016</p>
          </div>

          <div className="flex gap-2 items-center">
            <IoCall className="text-yellow-300" />
            <p className="text-white">6398540110</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
