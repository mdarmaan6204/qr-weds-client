import { Link } from "react-router-dom";
import { videoDetails } from "../utils";
const HomeVideo = () => {
  return (
    <div className="mb-8">
      <div className="text-center">
        <p className="my-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-zinc-500 to-blue-400 inline-block text-transparent bg-clip-text ">
          VIDEO
        </p>
      </div>
      <div className="shadow-inner rounded-lg w-10/12 h-[20rem] mx-auto flex overflow-x-scroll no-scrollbar">
        {videoDetails.map((vid) => (
          <img
            className="h-[18rem] w-[20rem] my-auto rounded-lg shadow-lg mx-2 hover:scale-[110%] duration-700"
            key={vid.id}
            src={vid.path}
          ></img>
        ))}
      </div>
      <div className="text-center">
        <Link to="/videos" >
          <button
           className="mt-2 bg-red-30 border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300  h-[3rem] w-[18rem]"
           >VIEW ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeVideo;
