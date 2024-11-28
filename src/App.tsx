import { Route, Routes } from "react-router-dom";
import "./App.css";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FooterContact from "./components/FooterContact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Head />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterContact />
      <Footer />
    </div>
  );
}

export default App;
