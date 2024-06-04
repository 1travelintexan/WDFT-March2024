import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, handleDelete }) => {
  if (recipes.length === 0) {
    return <p>loading....</p>;
  }

  return (
    <div>
      {recipes &&
        recipes.map((oneRecipe) => {
          return (
            <RecipeCard
              key={oneRecipe.id}
              recipe={oneRecipe}
              handleDelete={handleDelete}
            />
          );
        })}
    </div>
  );
};
export default RecipeList;
