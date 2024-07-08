import { Link } from "react-router-dom";
import { videoDetails } from "../utils";
const HomeVideo = () => {
  return (
    // <div className="mb-8">
    //   <div className="text-center">
    //     <p className="my-4 text-5xl font-bold bg-gradient-to-r from-green-400 via-zinc-500 to-blue-400 inline-block text-transparent bg-clip-text ">
    //       VIDEO
    //     </p>
    //   </div>
    //   <div className="shadow-inner rounded-lg w-10/12 h-[20rem] mx-auto flex overflow-x-scroll no-scrollbar">
    //     {videoDetails.map((vid) => (
    //       <img
    //         className="h-[18rem] w-[20rem] my-auto rounded-lg shadow-lg mx-2 hover:scale-[110%] duration-700"
    //         key={vid.id}
    //         src={vid.path}
    //       ></img>
    //     ))}
    //   </div>
    //   <div className="text-center">
    //     <Link to="/videos" >
    //       <button
    //        className="mt-2 bg-red-30 border-2 py-2 text-red-600 border-red-200 rounded-lg hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300  h-[3rem] w-[18rem]"
    //        >VIEW ALL</button>
    //     </Link>
    //   </div>
    // </div>
    <div className="mx-auto text-center">
      <div>
        <p className="my-4 text-5xl font-bold bg-gradient-to-r from-green-400 via-zinc-500 to-blue-400 inline-block text-transparent bg-clip-text ">
          VIDEO
        </p>
      </div>
      <div className="carousel carousel-center bg-slate-100  rounded-box max-w-7xl space-x-4 p-4">
        {videoDetails.map((video) => (
          <div key={video?.id}
           className="carousel-item hover:scale-105 duration-500">
            <img src={video?.path} className="rounded-box h-[20rem]" />
          </div>
        ))}
        {/* <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box"
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomeVideo;
