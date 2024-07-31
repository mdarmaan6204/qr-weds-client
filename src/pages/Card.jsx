import { hoverShadowColors } from "../utils";
const Card = ({ info }) => {


  const randomColor =
    hoverShadowColors[Math.floor(Math.random() * hoverShadowColors.length)];

  return (
    <div className="md:w-1/3 w-1/2">
      <div className="group  md:px-5 py-5">
        <div
          className={`mx-1 my-5 group rounded-lg  shadow-lg hover:scale-110 duration-500  p-2   flex flex-col items-center ${randomColor}`}
        >
          <img
            className="h-[20rem] w-11/12 rounded-lg group-hover:scale-110 duration-1000 pb-2 pt-1"
            src={info?.path}
          ></img>
          <div className="flex justify-between p-2 w-full">
            <p className="text-lg font-bold word-break text-blue-1000">
              {info.title}
            </p>
            <p className="text-lg font-bold text-green-500">
              {" "}
              Rs {info.price || 20}
            </p>
          </div>
          <p className="hidden group-hover:block duration-500 font-mono">
            {info?.des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
