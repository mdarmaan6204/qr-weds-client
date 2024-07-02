import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mb-0 bg-black text-white  px-4 py-2">
      <div className="flex justify-around">
        <div>
          <p className="font-bold text-xl my-4 underline decoration-2 underline-offset-2   decoration-red-600">
            Our Company
          </p>
          <ul>
            <Link>
              <li className="text-slate-300 my-1">About Us</li>
            </Link>
            <Link>
              <li className="text-slate-300 my-1">Our Services</li>
            </Link>
            <Link>
              <li className="text-slate-300 my-1">Privacy Policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl my-4 underline decoration-2 underline-offset-2   decoration-red-600">
            Get Help
          </p>
          <ul>
            <Link to="faq">
              <li className="text-slate-300  my-1">FAQ</li>
            </Link>
            <Link>
              <li className="text-slate-300  my-1">Reviews</li>
            </Link>
            <Link to="contact">
              <li className="text-slate-300  my-1">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl my-4 underline decoration-2 underline-offset-2   decoration-red-600">
            Online Shop
          </p>
          <ul>
            <Link to="cards">
              <li className="text-slate-300 my-1">Cards</li>
            </Link>
            <Link to="qr">
              <li className="text-slate-300 my-1">QR</li>
            </Link>
            <Link>
              <li className="text-slate-300 my-1">Photography</li>
            </Link>
            <Link>
              <li className="text-slate-300 my-1">Videography</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl my-4 underline decoration-2 underline-offset-2   decoration-red-600">
            Follow
          </p>
          <ul>
            <Link to="">
              <li className="text-slate-300 my-1">Instagram</li>
            </Link>
            <Link to="">
              <li className="text-slate-300 my-1">Facebook</li>
            </Link>
            <Link>
              <li className="text-slate-300 my-1">LinkedIn</li>
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-center pt-6 font-mono">
        Copyright © 2024 | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
