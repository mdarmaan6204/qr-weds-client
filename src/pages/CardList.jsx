import Card from "./Card";
import {cardDetails} from "../utils"

const CardList = ({showCategory , price , applyFilter}) => {
  console.log(showCategory);
  console.log(price);
  console.log(applyFilter);
  return (
    <div className="flex px-2 md:px-9 justify-center md:py-10 flex-wrap">
  {cardDetails.filter((card) => (showCategory === "All" || card.cat === showCategory) && card.price <= price)
    .map((filteredCard) => (
      <Card key={filteredCard.id} info={filteredCard} />
    ))}
</div>
  
  );
};

export default CardList;
