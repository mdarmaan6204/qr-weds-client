import { Link } from "react-router-dom";
import LOGO from "../../public/Images/LOGO.png";

const Header = () => {
  return (
    <div className="text-white">
      <div className="bg-black h-[4rem] p-2 flex shadow-lg">
        <Link to="/" className="my-auto">
          <div className="4/12 flex my-auto">
            <img className=" h-[3rem] -mt-2 mx-2" src={LOGO}></img>
            <p className=" text-2xl  text-amber-400 font-extrabold italic">
              QR WEDS
            </p>
          </div>
        </Link>
        <div className="w-10/12 flex justify-between items-center">
          <div className="w-11/12 ">
            <ul className=" flex justify-between  mx-56 ">
              <Link to="/">
                <li className="hover:scale-125 duration-300">HOME</li>
              </Link>
              <Link to="/videos">
                <li className="hover:scale-125 duration-300">VIDEOS</li>
              </Link>

              <Link to="/cards">
                <li className="hover:scale-125 duration-300">CARDS</li>
              </Link>
              <Link to="/qr">
                <li className="hover:scale-125 duration-300">QR DESIGN</li>
              </Link>
              <Link to="/photography">
                <li className="hover:scale-125 duration-300">PHOTOGRAPHY</li>
              </Link>
            </ul>
          </div>
          <Link to="/login">
            <div className="ml-0 text-end w-1/12 mr-5">LOGIN</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
