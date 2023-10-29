import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import QuiSommesNous from "./components/QuiSommesNous";
import CqlPropose from "./components/CqlPropose";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/qui-sommes-nous" element={<QuiSommesNous/>}></Route>
        <Route path="/cql-propose" element={<CqlPropose/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
