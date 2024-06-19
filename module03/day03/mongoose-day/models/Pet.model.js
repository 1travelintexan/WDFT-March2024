const { model, Schema } = require("mongoose");

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 1,
  },
  petType: {
    type: String,
    enum: ["dog", "cat", "bird", "snake", "other"],
  },
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1516366434321-728a48e6b7bf?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  petToys: {
    type: [String],
  },
});
//this line creates the model and the model needs the name of the collection and the shape of the data
const PetModel = model("pet", petSchema);
module.exports = PetModel;
