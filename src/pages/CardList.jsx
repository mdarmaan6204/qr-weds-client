import Card from "./Card";

const CardList = ({ cardsDetails }) => {
  return (
    <div className="flex px-8 align-middle py-10 flex-wrap">
      {cardsDetails.map((card) => (
        <Card key={card.id} info={card} />
      ))}
    </div>
  );
};

export default CardList;
