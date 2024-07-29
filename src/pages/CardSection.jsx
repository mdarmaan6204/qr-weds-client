import { useState } from "react";
import CardList from "./CardList";

const CardSection = () => {
  const [showCategory, setShowCategory] = useState("All");
  const [price, setPrice] = useState(10000);
  const [applyFilter , setApplyFilter] = useState(false)
  return (
    <div className="p-2 ">
      <div>
        <p className="text-3xl font-bold text-center py-4">WEDDING CARDS</p>
        <div className="flex md:px-20 px-2 justify-between md:w-3/4 py-2">
          <div className="flex mx-2">
            <label className="font-bold md:block hidden text-black text-lg md:text-2xl  my-auto mr-4">
              Religion:
            </label>
            <select
              className="select select-secondary w-full max-w-xs"
              onChange={(e) => setShowCategory(e.target.value)}
            >
              <option disabled selected>
                Choose a religion you're looking for
              </option>
              <option>All</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
            </select>
          </div>
          <div className="flex mx-4">
            <label className="font-bold md:block hidden text-black text-lg md:text-2xl  my-auto mr-4">
              Price:
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered input-secondary w-full max-w-xs"
              onChange={(e) => setPrice(e.target.value)}
            />
            {/* <button className="btn btn-outline btn-secondary md:ml-10 ml-2"
            onClick={()=>setApplyFilter(true)}>
              Search
            </button> */}
          </div>
        </div>
        <CardList showCategory={showCategory} price = {price} applyFilter = {applyFilter} />
      </div>
    </div>
  );
};

export default CardSection;
