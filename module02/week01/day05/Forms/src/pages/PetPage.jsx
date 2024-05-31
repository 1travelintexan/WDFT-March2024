import { Link } from "react-router-dom";

const PetPage = (props) => {
  return (
    <div>
      <Link to="/create-a-pet">
        <button>Create a Pet</button>
      </Link>
      <div className="pet-page-container">
        <div className="pets-container">
          <h2>Pets:</h2>
          {props.pets.map((onePet) => {
            return (
              <div key={onePet.id} className="pet-card">
                <h5>Pet Name: {onePet.name}</h5>
                <h5>Pet Type: {onePet.type}</h5>
                {props.favoritePets.includes(onePet) ? null : (
                  <button
                    onClick={() => {
                      props.handleAddToFavorites(onePet);
                    }}
                  >
                    Add to Favorites
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="favorites-container">
          <h2>Favorites:</h2>
          {props.favoritePets.length === 0 ? (
            <h6>No Favorites yet</h6>
          ) : (
            props.favoritePets.map((oneFav) => {
              return <h4 key={oneFav.id}>{oneFav.name}</h4>;
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default PetPage;
