import Card from "./Card";
import {cardDetails} from "../utils"

const CardList = () => {
  return (
    <div className="flex px-2 md:px-9  justify-center  md:py-10 flex-wrap " >
      {cardDetails.map((card) => (
        <Card key={card.id} info={card} />
      ))}
    </div>
  );
};

export default CardList;
