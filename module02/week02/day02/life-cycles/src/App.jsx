import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // const fetchRecipes = () => {
    //   fetch("https://dummyjson.com/recipes")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("here is the actual data", data.recipes);
    //       setRecipes(data.recipes);
    //     })
    //     .catch((err) => console.log(err));
    // };
    const fetchRecipesAsync = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecipesAsync();
  }, []);

  function handleDelete(event, recipeId) {
    event.preventDefault();
    console.log("recipe deleted", recipeId);
    const filteredRecipes = recipes.filter((oneRecipe) => {
      if (recipeId !== oneRecipe.id) {
        return true;
      }
    });
    setRecipes(filteredRecipes);
  }
  return (
    <>
      <h1>Use Effect Day!</h1>

      <Routes>
        <Route
          path="/"
          element={<RecipeList recipes={recipes} handleDelete={handleDelete} />}
        />
        <Route path="/one-recipe/:recipeId" element={<RecipeDetailsPage />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <h1>This is a Footer</h1>
    </>
  );
}

export default App;
