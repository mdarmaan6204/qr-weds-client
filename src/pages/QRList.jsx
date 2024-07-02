import QRCard from "./QRCard";

const QRList = ({qrDetails}) => {
  return (
    <div className="flex px-8 align-middle py-10 flex-wrap">
      {qrDetails.map((card) => (
        <QRCard key={card.id} info={card} />
      ))}
    </div>
  );
};

export default QRList;
