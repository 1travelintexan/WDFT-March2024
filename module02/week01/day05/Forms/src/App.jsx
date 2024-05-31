import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";
import CreateAPet from "./components/CreateAPet";
function App() {
  const [pets, setPets] = useState([
    { id: 1, name: "Ragnar", type: "dog" },
    { id: 2, name: "Honey", type: "dog" },
    { id: 3, name: "Ghost", type: "snake" },
  ]);
  const [favoritePets, setFavoritePets] = useState([]);

  function handleAddToFavorites(onePet) {
    console.log("added to favs", onePet);
    setFavoritePets([...favoritePets, onePet]);
  }
  return (
    <>
      <h1>Forms</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/pets"
          element={
            <PetPage
              pets={pets}
              handleAddToFavorites={handleAddToFavorites}
              favoritePets={favoritePets}
            />
          }
        />
        <Route
          path="/create-a-pet"
          element={<CreateAPet pets={pets} setPets={setPets} />}
        />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/ragnar" element={<RagnarPage />} />
        <Route path="/petDetail/:petId" element={<PetDetail pets={pets} />} />  */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
