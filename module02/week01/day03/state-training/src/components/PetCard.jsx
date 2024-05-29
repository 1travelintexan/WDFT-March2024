const PetCard = (props) => {
  console.log("our props", props);
  function petType() {
    // return props.pet.type === "dog" ? (
    //   <h1>🐶</h1>
    // ) : props.pet.type === "cat" ? (
    //   <h1>😾</h1>
    // ) : (
    //   <h1>🐍</h1>
    // );
    if (props.pet.type === "dog") {
      return <h1>🐶</h1>;
    } else if (props.pet.type === "cat") {
      return <h1>😾</h1>;
    } else {
      return <h1>🐍</h1>;
    }
  }
  return (
    <div className="pet-card">
      <h3>Pet Name: {props.pet.name}</h3>
      {petType()}
      <h4>Pet Age: {props.pet.age}</h4>
      <button
        onClick={() => {
          props.handleDeletePet(props.pet.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default PetCard;
