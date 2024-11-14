import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center w-[60%]">
        <div className="w-[150px]">
          <img src={logo} />
        </div>

        <div>
          <ul className="flex gap-5">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>CONTACT US</li>
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
