import { Link, useLocation } from "react-router-dom";
const RecipeCard = ({ recipe, handleDelete }) => {
  const something = useLocation();
  console.log(something);
  if (!recipe) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Link to={`/one-recipe/${recipe.id}`}>
        <div className="recipe-card">
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ height: "100px" }}
          />
          <h5>{recipe.name}</h5>
          {something.pathname === "/something" ? (
            <button
              onClick={(event) => {
                handleDelete(event, recipe.id);
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
      </Link>
    </div>
  );
};
export default RecipeCard;
