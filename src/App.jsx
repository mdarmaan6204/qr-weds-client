import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import VideoSection from "./pages/VideoSection";
import CardSection from "./pages/CardSection";
import Photography from "./pages/Photography";
import QRSection from "./pages/QRSection";
import Home from "./pages/Home";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import { createContext, useEffect, useState } from "react";
import Service from "./pages/Service";

export const ThemeContext = createContext("light");
const App = () => {
const [theme, setTheme] = useState("light");
  return (
    <Router >
      <ThemeContext.Provider value={theme}>
        <Header  setTheme = {setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<VideoSection />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/cards" element={<CardSection />} />
          <Route path="/qr" element={<QRSection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
