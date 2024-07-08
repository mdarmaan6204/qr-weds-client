const Card = ({ info }) => {
  return (
    // <div className="mx-1 my-5 group rounded-lg  p-2  h-[25rem] w-[17rem] flex flex-col items-center">
    //   <img
    //     className="h-[20rem] w-11/12 rounded-lg group-hover:h-[19rem] duration-500"
    //     src={info?.path}
    //   ></img>
    //   <div className="flex justify-between p-2 w-full">
    //     <p className="text-lg font-bold text-blue-500">{info.title}</p>
    //     <p className="text-lg font-bold text-green-500">{info.price}</p>
    //   </div>
    //   <div className="hidden duration-500 group-hover:block overflow-hidden text-sm font-thin pb-1">
    //     {info.des}
    //   </div>
    // </div>
    <div className="flex md:w-1/4 md:mx-4 mx-2 my-4 md:my-10 w-5/12 group hover:scale-105 duration-1000 py-1 h-[12rem] md:h-[30rem] bg-red-400">
      <div className="carousel w-11/12 mx-auto ">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img
          src = {info?.path}
          className="w-full md:group-hover:h-[27rem] group-hover:h-[11rem]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex  -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle " >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
          src = {info?.path}
          className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
          src = {info?.path}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Card;
