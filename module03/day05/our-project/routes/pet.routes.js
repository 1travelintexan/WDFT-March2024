const router = require("express").Router();
const PetModel = require("../models/Pet.model");

router.post("/create-pet", async (req, res) => {
  try {
    const createPet = await PetModel.create(req.body);
    console.log("Pet created", createPet);
    res.status(201).json(createPet);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/all-pets", async (req, res) => {
  try {
    const allPets = await PetModel.find().populate("owner");
    console.log(allPets);
    res.status(200).json(allPets);
  } catch (error) {
    console.log(error);
  }
});

router.get("/one-pet/:petId", async (req, res) => {
  const { petId } = req.params;
  try {
    const foundPet = await PetModel.findById(petId).populate("owner");
    console.log("one pet found", foundPet);
    res.status(200).json(foundPet);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/delete-pet/:petId", async (req, res) => {
  try {
    await PetModel.findByIdAndDelete(req.params.petId);
    res.status(200).json({ message: "Pet removed successfully" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
