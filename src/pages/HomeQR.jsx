import { Link } from "react-router-dom";
import { qrDetails } from "../utils";
const HomeQR = () => {
  return (
    <div className="mb-8">
      <div className="text-center">
        <p className="my-4 text-5xl font-bold bg-gradient-to-r from-red-400 via-blue-500 to-red-400 inline-block text-transparent bg-clip-text ">
          QR DESIGN
        </p>
      </div>
      <div className="shadow-inner rounded-lg w-10/12 h-[20rem] mx-auto flex overflow-x-scroll no-scrollbar">
        {qrDetails.map((qr) => (
          <img
            className="h-[18rem] my-auto rounded-lg shadow-lg mx-1 hover:scale-[110%] duration-700"
            key={qr.id}
            src={qr.path}
          ></img>
        ))}
      </div>
      <div className="text-center">
        <Link to="/qr" >
          <button className="mt-2 bg-red-30 text-xl border-2 py-2 text-red-600 border-red-400 shadow-inner hover:bg-red-600 hover:scale-110 duration-300 hover:text-white h-[3rem] w-[15rem]">VIEW ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeQR;
