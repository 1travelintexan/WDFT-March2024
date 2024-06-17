//This is the file that creates our server
//line 3 creates a variable that is the express package
const express = require("express");
//line 5 is calling that package with the ( ) and storing in a variable named app
const app = express();
//line 7 is making a dynamic variable for the port number we are using. This will help when we deploy
const port = process.env.PORT || 5005;
//this is setting up the package 'morgan' and morgan logs every request for us
const morgan = require("morgan");

//**********here are the middlewares, the are the app.use! **********
//after you create the morgan variable then we need a middleware that calls the morgan on every request
app.use(morgan("dev"));
//this line tells the server where the 'public' folder is
//public folder should hold stylesheets, images and js files
app.use(express.static("public"));
//this middleware is configuring the server to  use .json
app.use(express.json());

//************* Handling Routes ******************/
//this is a 'get' route for simply / so localhost:5005/
//when the url matches the / then it calls the next function where we have the req and res
app.get("/", (req, res) => {
  //inside of this function, I could contact the DB or an API and send that data
  //__dirname is the absolute path to where you are right now. In your computer
  res.status(200).sendFile(__dirname + "/views/index.html");
});
//this route will handle get requests to /about
app.get("/about", (request, response) => {
  response.status(200).sendFile(__dirname + "/views/about.html");
});
app.get("/pets", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/pets.html");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
//*********This 'listens' to the port we give it and logs when that is successful **********/
app.listen(port, () => {
  console.log("Server running on port ", port);
});
