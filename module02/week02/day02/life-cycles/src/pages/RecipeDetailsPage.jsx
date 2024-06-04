import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetailsPage = () => {
  const [oneRecipe, setOneRecipe] = useState(null);
  const { recipeId } = useParams();
  console.log("my params", recipeId);
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((theOneRecipe) => {
        console.log("the one recipe", theOneRecipe);
        setOneRecipe(theOneRecipe);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);

  if (!oneRecipe) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <img
        src={oneRecipe.image}
        alt={oneRecipe.name}
        style={{ width: "70vw" }}
      />
      <h2>{oneRecipe.name}</h2>
      <h3>Calories: {oneRecipe.caloriesPerServing}</h3>
      <h3>Cooking time: {oneRecipe.cookTimeMinutes} mins</h3>
      <h4>How to prepare:</h4>
      <ul>
        {oneRecipe.instructions.map((oneInstruction) => {
          return <li key={oneInstruction}> {oneInstruction}</li>;
        })}
      </ul>
    </div>
  );
};
export default RecipeDetailsPage;
