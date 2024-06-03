import "./App.css";
import Navbar from "./components/Navbar";
import PetCard from "./components/PetCard";

function App() {
  const arrayOfPets = [
    {
      name: "Honey",
      age: 8,
      breed: "fila",
      image:
        "https://www.cpc.pt/wp-content/uploads/2021/01/fila_smiguel_14.jpg",
      owner: "Renan",
      address: {
        home: 123,
        street: "Renans way",
        postCode: 11111,
      },
    },
    {
      name: "Ragnar",
      age: 3,
      image:
        "https://images.unsplash.com/photo-1627149028254-00d7e7221b06?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      breed: "bully",
      owner: "Joshua",
      address: {
        home: 123,
        street: "Joshs way",
        postCode: 77777,
      },
    },
    {
      name: "Buddy",
      age: 12,
      image:
        "https://images.unsplash.com/photo-1507543139012-85b5900144e4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      breed: "mix",
      owner: "Joshua",
      address: {
        home: 123,
        street: "Joshs way",
        postCode: 77777,
      },
    },
  ];
  return (
    <>
      {/* this is calling the Navbar component */}
      {/* theName is 'the name' of the prop and {name} is the value */}
      <Navbar />
      <h1>All about props</h1>
      {/* {arrayOfPets.map((pet, index) => {
        return <PetCard onePet={pet} />;
      })} */}
      <PetCard onePet={arrayOfPets[0]} />
      <PetCard onePet={arrayOfPets[1]} />
      <PetCard onePet={arrayOfPets[2]} />
    </>
  );
}

export default App;
