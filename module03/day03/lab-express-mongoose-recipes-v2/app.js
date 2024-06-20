const express = require("express");
const logger = require("morgan");

const app = express();
const RecipeModel = require("./models/Recipe.model");
// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION
const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// ROUTES
//  GET  / route - This is just an example route
app.get("/", (req, res) => {
  res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route
app.post("/recipe", async (req, res) => {
  try {
    const newRecipe = await RecipeModel.create(req.body);
    console.log("recipe created! Nice work", newRecipe);
    res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error._message);
    if (error.code === 11000) {
      res.status(500).json({
        errorMessage: "Title already exists, please choose a new one",
      });
    } else if (error._message === "recipe validation failed") {
      res
        .status(500)
        .json({ errorMessage: "Recipe doesnt match the correct shape" });
    } else {
      res.status(500).json({ errorMessage: "internal server error" });
    }
  }
});

//  Iteration 4 - Get All Recipes
//  GET  /recipes route
app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find();
    console.log("here are all the recipes", allRecipes);
    res.status(200).json(allRecipes);
  } catch (error) {
    console.log(error);
  }
});

//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route
app.get("/recipes/:id", async (req, res) => {
  try {
    const oneRecipe = await RecipeModel.findOne({ _id: req.params.id });
    console.log("here is the one recipe", oneRecipe);
    res.status(200).json(oneRecipe);
  } catch (error) {
    console.log(error);
  }
});
//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route
app.put("/recipes/:id", async (req, res) => {
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log("recipe updated", updatedRecipe);
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
  }
});

//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
app.delete("/recipes/:recipeId", async (req, res) => {
  try {
    await RecipeModel.findByIdAndDelete(req.params.recipeId);
    res.status(200).json({ message: "successfully deleted recipe" });
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(5005, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
