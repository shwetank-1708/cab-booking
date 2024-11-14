import { FaRegAddressBook } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoCall } from "react-icons/io5";

const Head = () => {
  return (
    <>
      <div className="flex justify-center bg-black lg:flex-row flex-col">
        <div className="flex justify-around h-11 xl:w-[70%] w-[100%]">
          <div className="flex gap-2 items-center">
            <FaRegAddressBook className="text-yellow-300" />
            <p className="text-white hidden lg:block">Dehradun, Uttarakhand</p>
          </div>

          <div className="flex gap-2 items-center">
            <LuMail className="text-yellow-300" />
            <p className="text-white hidden lg:block">
              Dpraveshuniyal262@gmail.com
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <IoCall className="text-yellow-300" />
            <p className="text-white hidden lg:block">9675531176</p>
          </div>

          <div className="flex gap-2 items-center">
            <IoCall className="text-yellow-300" />
            <p className="text-white hidden lg:block">8859908016</p>
          </div>

          <div className="flex gap-2 items-center">
            <IoCall className="text-yellow-300" />
            <p className="text-white hidden lg:block">6398540110</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
