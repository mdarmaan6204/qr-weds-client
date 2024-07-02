const Card = ({ info }) => {
  console.log("CARD");
  console.log(info);
  return (
    <div className="mx-1 my-5 group rounded-lg  p-2  h-[25rem] w-[17rem] flex flex-col items-center">
      <img
        className="h-[20rem] w-11/12 rounded-lg group-hover:h-[19rem] duration-500"
        src={info?.path}
      ></img>
      <div className="flex justify-between p-2 w-full">
        <p className="text-lg font-bold text-blue-500">{info.title}</p>
        <p className="text-lg font-bold text-green-500">{info.price}</p>
      </div>
      <div className="hidden duration-500 group-hover:block overflow-hidden text-sm font-thin pb-1">
        {info.des}
      </div>
    </div>
  );
};

export default Card;
