const PetCard = ({ onePet }) => {
  console.log(onePet);

  return (
    <div className="pet-card">
      <img src={onePet.image} alt={onePet.name} style={{ height: "100px" }} />
      <h3>Name: {onePet.name} </h3>
      <h3>Owner: {onePet.owner}</h3>
    </div>
  );
};
export default PetCard;
