import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import QuiSommesNous from "./components/QuiSommesNous";
import CqlPropose from "./components/CqlPropose";
import data from "./components/Troubles/Troubles.json";
import Trouble from "./components/Troubles/Trouble";

function App() {
  console.log(data);

  return (
    <BrowserRouter>
      <Navbar troubles={data.troubles} />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />}></Route>
        <Route path="/cql-propose" element={<CqlPropose />}></Route>
        {/* Troubles */}
        {data.troubles.map((trouble) => {
          return (
            <Route
              path={trouble.path}
              element={<Trouble trouble={trouble} />}
            ></Route>
          );
        })}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
