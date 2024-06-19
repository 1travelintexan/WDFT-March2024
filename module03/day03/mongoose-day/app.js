//This is the file that creates our server
//line 3 creates a variable that is the express package
const express = require("express");
//line 5 is calling that package with the ( ) and storing in a variable named app
const app = express();
//line 7 is making a dynamic variable for the port number we are using. This will help when we deploy
const port = process.env.PORT || 5005;
//this is setting up the package 'morgan' and morgan logs every request for us
const morgan = require("morgan");
//this one liner will call the index.js inside of the db folder and connect to the DB for us
require("./db");

//this is grabbing our model from the Pet.model.js file
const PetModel = require("./models/Pet.model");
//**********here are the middlewares, the are the app.use! **********
//after you create the morgan variable then we need a middleware that calls the morgan on every request
app.use(morgan("dev"));
//this line tells the server where the 'public' folder is
//public folder should hold stylesheets, images and js files
app.use(express.static("public"));
//this middleware is configuring the server to  use .json
app.use(express.json());

//this is where I will create a pet and insert him into the DB
// const petToCreate = {
//   name: "Ragnar",
//   age: 8,
//   petType: "dog",
//   petToys: ["ball", "kong bone", "stuffed animal"],
// };
//.then and .catch method of creating a pet in the db
// PetModel.create(pet)
//   .then((petFromDB) => {
//     console.log("Pet created!!!! ", petFromDB);
//   })
//   .catch((err) => console.log(err));
//async and await version of creating a pet
const createAPet = async (pet) => {
  try {
    const createdPet = await PetModel.create(pet);
    console.log("Pet created!!!! ", createdPet);
    return createdPet;
  } catch (error) {
    console.log("error creating a pet", error);
  }
};
//always remember to call the function after you create it
// createAPet(petToCreate);

//**********finding all pets in the db *************/
const findAllPets = async () => {
  try {
    const onePet = await PetModel.findByIdAndUpdate(
      "66728f24678465a821b5dcbf",
      { name: "HONEY" },
      //the new: true says to the DB, give me the updated information, not the old info
      { new: true }
    );
    console.log("here is the updated pet", onePet);
  } catch (error) {
    console.log(error);
  }
};
// findAllPets();
//*********This 'listens' to the port we give it and logs when that is successful **********/

//*************** All the routes to handle creating and updating pets *********/
//this route creates a pet with the req.body
app.post("/create-a-pet", async (req, res) => {
  // const addedPet = await createAPet(req.body);
  try {
    const createdPet = await PetModel.create(req.body);
    console.log("Pet created!!!! ", createdPet);
    res.status(201).json(createdPet);
  } catch (error) {
    console.log("error creating a pet", error);
  }
});
//this route gets all the pets from the db and returns them
//this route finds and returns all pets in the DB
app.get("/get-all-pets", async (req, res) => {
  console.log("here are the queries", req.query);
  try {
    const getAllPets = await PetModel.find({ name: req.query.name });
    res.status(200).json(getAllPets);
  } catch (error) {
    console.log(error);
  }
});
//this route finds one specific pet
app.get("/get-one-pet/:petId", async (req, res) => {
  const { petId } = req.params;
  try {
    const onePet = await PetModel.findById(petId);
    res.status(200).json(onePet);
  } catch (error) {
    console.log(error);
  }
});
//this route finds one pet by the id and deletes him from the DB
app.delete("/delete-one-pet/:petId", async (req, res) => {
  const { petId } = req.params;
  try {
    const deletedPet = await PetModel.findByIdAndDelete(petId);
    res.status(200).json(deletedPet);
  } catch (error) {
    console.log(error);
  }
});
//this route finds one pet by the id and updates them
app.patch("/update-pet/:petId", async (req, res) => {
  try {
    const updatedPet = await PetModel.findByIdAndUpdate(
      req.params.petId,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json(updatedPet);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server running on port ", port);
});
