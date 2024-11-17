import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center xl:w-[60%] w-[100%]">
        <div className="w-[150px]">
          <img src={logo} />
        </div>

        <div>
          <ul className="flex gap-5 font-bold">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT US</NavLink>
            <NavLink to="/services">SERVICES</NavLink>
            <NavLink to="/contact">CONTACT US</NavLink>
          </ul>
        </div>

        <div>
          <button className="border-yellow-300 border-2 px-[50px] py-2">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
