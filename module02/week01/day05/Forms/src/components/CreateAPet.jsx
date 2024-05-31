import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAPet = ({ pets, setPets }) => {
  const [name, setName] = useState("Ragnar");
  const [type, setType] = useState("");
  const nav = useNavigate();
  function handleAddPet(event) {
    //the first thing to do in React when you submit a form is stop it from reloading
    event.preventDefault();
    const newPet = { name, type: type, id: pets.length + 1 };
    console.log("pet being added", newPet, "here are the old pets", pets);
    //this is spreading and copying the original array of pets, then with the comma its adding one new pet
    setPets([...pets, newPet]);
    //this is navigating or changing the url just like a 'Link' but without clicking anything. It does this after I added the new pet
    nav("/pets");
  }
  return (
    <div>
      <h2>Create A Pet</h2>
      <form onSubmit={handleAddPet}>
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
        <button>Add Pet</button>
      </form>
    </div>
  );
};
export default CreateAPet;
