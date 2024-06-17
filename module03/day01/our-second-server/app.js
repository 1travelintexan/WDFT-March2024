const express = require("express");
const app = express();
const port = 5005;
const morgan = require("morgan");
const petsJSON = require("./data/pets.json");
app.use(morgan("dev"));
app.use(express.static("public"));
//*************Routes ***********/
app.get("/", (req, res) => {
  console.log("here are the pets", petsJSON);
  res.status(200).json({ petsJSON });
});
app.listen(5005, () => console.log("server running! On port 5005"));
