import Card from "./Card";

const CardList = ({ cardsDetails }) => {
  return (
    <div className="flex px-2 md:px-9  justify-center  md:py-10 flex-wrap " >
      {cardsDetails.map((card) => (
        <Card key={card.id} info={card} />
      ))}
    </div>
  );
};

export default CardList;
