import { Link } from "react-router-dom";

const PetPage = (props) => {
  return (
    <div>
      <h2>Pets:</h2>
      {props.pets.map((onePet) => {
        return (
          <div key={onePet.id}>
            <Link to={`/petDetail/${onePet.id}`}>{onePet.name}</Link>
          </div>
        );
      })}
    </div>
  );
};
export default PetPage;
