import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from  "./pages/Header"
import Footer from "./pages/Footer";
import { Home } from "@mui/icons-material";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import VideoSection from "./pages/VideoSection";
import CardSection from "./pages/CardSection";
import Photography from "./pages/Photography";
import QRSection from "./pages/QRSection";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/videos" element={<VideoSection />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/cards" element={<CardSection />} />
        <Route path="/qr" element={<QRSection />} />




        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
