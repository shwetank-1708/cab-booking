import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center xl:w-[60%] w-[100%]">
        <div className="w-[150px]">
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

        <div className="">
          <button className="border-yellow-300 border-2 px-[50px] py-2">
            BOOK NOW
          </button>
        </div>

        <div className="block md:hidden">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      {/* For Side Bar Menu */}

      {/* <div className={`setVisible`}>
        <NavLink to="/">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/about">
          <p>ABOUT US</p>
        </NavLink>
        <NavLink to="/services">
          <p>SERVICES</p>
        </NavLink>
        <NavLink to="/contact">
          <p>CONTACT US</p>
        </NavLink>
      </div> */}
    </div>
  );
};

export default Navbar;
