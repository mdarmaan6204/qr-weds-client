import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white">
      <div className="bg-black h-[3rem] p-2 flex shadow-lg">
        <div className=" w-1/12 text-xl text-amber-400 font-extrabold italic">QR WEDS</div>
        <div className="w-11/12 flex justify-between ">
          <div className="w-10/12">
            <ul className=" flex justify-between  mx-56">
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
          <div className="ml-0 text-end w-1/12 mr-5">LOGIN</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
