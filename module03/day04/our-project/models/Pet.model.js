const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ["dog", "cat", "snake"] },
    age: Number,
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;
