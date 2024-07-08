import { useState } from "react";
import LANDING_IMG from "/Images/finalimage.jpg";
const HomeTop = () => {
  return (
    <div className="flex justify-center bg-inherit">
      <img
      className="w-[80%] h-lvh"
       src={LANDING_IMG}></img>
    </div>
  );
};

export default HomeTop;
