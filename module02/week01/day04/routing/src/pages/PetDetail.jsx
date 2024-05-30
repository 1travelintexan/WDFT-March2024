import { useParams } from "react-router-dom";

const PetDetail = (props) => {
  const { petId } = useParams();
  console.log("our params", petId);
  const onePet = props.pets.find((onePet) => {
    if (onePet.id == petId) {
      return true;
    }
  });
  console.log("this is the one", onePet);
  return (
    <div>
      <h1>{onePet.name}'s Page!!!!</h1>
      <h3>Type: {onePet.type}</h3>
    </div>
  );
};
export default PetDetail;
