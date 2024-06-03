import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const EditPet = ({ pets, setPets }) => {
  const petParams = useParams();
  const foundPet = pets.find((onePet) => {
    if (onePet.id == petParams.petId) {
      return true;
    }
  });
  console.log(petParams, pets, foundPet);
  const [name, setName] = useState(foundPet.name);
  const [type, setType] = useState(foundPet.type);
  const nav = useNavigate();
  function handleEditPet(event) {
    //the first thing to do in React when you submit a form is stop it from reloading
    event.preventDefault();
    const updatedPet = { name, type };
    console.log("pet being added", updatedPet);
    //this is spreading and copying the original array of pets, then with the comma its adding one new pet
    const updatedArrayOfPets = pets.map((pet) => {
      if (pet.id == petParams.petId) {
        return updatedPet;
      } else {
        return pet;
      }
    });
    setPets(updatedArrayOfPets);
    //this is navigating or changing the url just like a 'Link' but without clicking anything. It does this after I added the new pet
    nav("/pets");
  }
  return (
    <div>
      <h1>EditPet</h1>
      <form onSubmit={handleEditPet}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="enter your pet name"
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            value={type}
            placeholder="enter your pet type"
            onChange={(event) => {
              setType(event.target.value);
            }}
          />
        </label>
        <button>Edit Pet</button>
      </form>
    </div>
  );
};
