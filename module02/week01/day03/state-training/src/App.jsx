import { useState } from "react";
import "./App.css";
import PetCard from "./components/PetCard";
import PetList from "./components/PetList";

function App() {
  //inside the brackets you will always get TWO things, the state variable and the setter
  //inside the ( ) of the useState, is the initial value or starting value
  const [age, setAge] = useState(3);
  const [pets, setPets] = useState([
    { name: "Ragnar", age: 3, type: "dog", id: 1 },
    { name: "Honey", age: 7, type: "dog", id: 2 },
    { name: "Neji", age: 12, type: "cat", id: 3 },
    { name: "Ghost", age: 16, type: "snake", id: 4 },
  ]);

  function handleAddYear() {
    console.log("Ragnar got a year older");
    setAge((prev) => prev + 1);
    console.log("the age after the setter", age);
  }
  const handleSubtractYear = () => {
    console.log("Ragnar will live forever");
    setAge((prev) => {
      return prev - 1;
    });
  };
  function handleDeletePet(petId) {
    setPets(pets.filter((aPet) => aPet.id !== petId));
  }
  return (
    <>
      <h1>Use State</h1>
      <h3>Ragnars age is {age}</h3>
      <button
        onClick={() => {
          setAge((prev) => prev + 1);
        }}
      >
        Happy Birthday!
      </button>
      <button onClick={handleSubtractYear}>Ragnar is immortal</button>
      <h1>Our Pets:</h1>
      {pets.map((onePet) => {
        return (
          onePet.age < 100 && (
            <PetCard
              key={onePet.id}
              pet={onePet}
              handleDeletePet={handleDeletePet}
            />
          )
        );
      })}
    </>
  );
}

export default App;
