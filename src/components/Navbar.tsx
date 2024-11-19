import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center xl:w-[60%] w-[100%]">
        <div className="w-[150px] ml-3">
          <img src={logo} />
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-5 font-bold">
            <NavLink to="/">
              <p>HOME</p>
              <hr className="border-none h-[1.5px] bg-gray-600 hidden" />
            </NavLink>
            <NavLink to="/about">
              <p>ABOUT US</p>
              <hr className="border-none h-[1.5px] bg-gray-600 hidden" />
            </NavLink>
            <NavLink to="/services">
              <p>SERVICES</p>
              <hr className="border-none h-[1.5px] bg-gray-600 hidden" />
            </NavLink>
            <NavLink to="/contact">
              <p>CONTACT US</p>
              <hr className="border-none h-[1.5px] bg-gray-600 hidden" />
            </NavLink>
          </ul>
        </div>

        <div className="hidden md:block mr-3">
          <button className="border-yellow-300 border-2 px-[50px] py-2">
            BOOK NOW
          </button>
        </div>

        <div className="block md:hidden">
          <GiHamburgerMenu
            className="cursor-pointer mr-3 text-xl"
            onClick={() => {
              setVisible(true);
              console.log("Clicked");
            }}
          />
        </div>
      </div>

      {/* For Side Bar Menu */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0 "
        } `}
      >
        <IoClose
          className="cursor-pointer mt-2 ml-2 text-xl"
          onClick={() => setVisible(false)}
        />
        <NavLink to="/">
          <p className="mt-2 ml-2 font-bold">HOME</p>
        </NavLink>
        <NavLink to="/about">
          <p className="mt-2 ml-2 font-bold">ABOUT US</p>
        </NavLink>
        <NavLink to="/services">
          <p className="mt-2 ml-2 font-bold">SERVICES</p>
        </NavLink>
        <NavLink to="/contact">
          <p className="mt-2 ml-2 font-bold">CONTACT US</p>
        </NavLink>
        <div className="">
          <button className="border-yellow-300 border-2 px-[50px] py-2 mt-2 ml-2">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
