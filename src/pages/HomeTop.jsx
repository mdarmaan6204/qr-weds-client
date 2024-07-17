import LANDING_IMG from "/Images/finalimage.jpg";

const HomeTop = () => {
  return (
    <div className="flex justify-center bg-inherit pb-4">
      <img
      className="md:w-[50%]  mask-half-1 md:shadow-2xl shadow-md shadow-red-600"
       src={LANDING_IMG}></img>
    </div>
  );
};

export default HomeTop;
