import QRList from "./QRList";
import { qrDetails } from "../utils";

const QRSection = () => {
  return (
    <div className="p-2">
      <div>
        <div className="text-center">
        <p className="mt-4 text-5xl font-bold bg-gradient-to-r from-purple-400 via-yellow-400 to-sky-400 inline-block text-transparent bg-clip-text ">
          QR DESIGN
        </p>
        </div>
        <QRList qrDetails={qrDetails} />
      </div>
    </div>
  );
};

export default QRSection;
