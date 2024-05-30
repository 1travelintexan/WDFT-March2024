import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RagnarPage from "./pages/RagnarPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PetPage from "./pages/PetPage";
import PetDetail from "./pages/PetDetail";

function App() {
  const [pets, setPets] = useState([
    { id: 1, name: "Ragnar", type: "dog" },
    { id: 2, name: "Honey", type: "dog" },
    { id: 3, name: "Ghost", type: "snake" },
  ]);
  return (
    <>
      <Navbar />
      <h1>Routing Day</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<PetPage pets={pets} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ragnar" element={<RagnarPage />} />
        <Route path="/petDetail/:petId" element={<PetDetail pets={pets} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
