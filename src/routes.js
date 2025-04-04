import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portifolio from "./pages/Portifolio";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Erro from "./pages/Erro";

import ScrollTop from "./components/ScrollTop";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />} />
        <Route path="/Portifolio" element={<Portifolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Erro />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default RoutesApp;
