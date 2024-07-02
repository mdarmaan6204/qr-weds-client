import CardList from "./CardList";
import {cardsDetails} from "../utils";


const CardSection = () => {
  return (
    <div className="p-2 ">
      <div>
        <p className="text-3xl font-bold text-center">WEDDING CARDS</p>
        <CardList  cardsDetails={cardsDetails} />
      </div>
    </div>
  );
};

export default CardSection;
