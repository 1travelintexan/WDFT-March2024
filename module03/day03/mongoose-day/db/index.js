//this is the mongoose variable (the connector to the db from our server)
const mongoose = require("mongoose");

//************first connect to the DB and get a log when its successful ********/
//this variable is the address of our local host db, with the name of the DB on the end
const dbAddress = process.env.DB_URL || "mongodb://127.0.0.1:27017/pizza-DB";
mongoose
  .connect(dbAddress)
  .then((responseFromDB) => {
    console.log("connected to the DB! Nice work");
  })
  .catch((err) => {
    console.log("Problem with connecting to the DB", err);
  });
