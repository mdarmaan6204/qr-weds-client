import QRList from "./QRList";
import { qrDetails } from "../utils";

const QRSection = () => {
  return (
    <div className="p-2">
      <div>
        <p className="text-center text-3xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-violet-500">
          QR DESIGN
        </p>
        <QRList qrDetails = {qrDetails} />
      </div>
    </div>
  );
};

export default QRSection;
