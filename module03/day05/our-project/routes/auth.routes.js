const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.post("/signup", async (req, res) => {
  // Use regex to validate the email format
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // if (!emailRegex.test(req.body.email)) {
  //   res.status(400).json({ message: "Provide a valid email address." });
  //   return;
  // }

  // // Use regex to validate the password format
  // const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  // if (!passwordRegex.test(req.body.password)) {
  //   res
  //     .status(400)
  //     .json({
  //       message:
  //         "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
  //     });
  //   return;
  // }
  try {
    const foundUser = await UserModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });
    if (foundUser) {
      res.status(500).json({
        errorMessage: "Please pick unique username and email",
      });
    } else {
      //this is if there is no found user in the DB, so we create them now
      const salt = bcryptjs.genSaltSync(10);
      const hashedPassword = bcryptjs.hashSync(req.body.password, salt);
      // console.log("here is the salt", salt);
      // console.log("here is the password", req.body.password);
      // console.log("here is the hashed password", hashedPassword);
      const userToCreate = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      };
      const createdUser = await UserModel.create({
        ...req.body,
        password: hashedPassword,
      });
      console.log("User created", createdUser);
      res.status(201).json(createdUser);
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/login", async (req, res) => {
  try {
    //first check if the user exists in the DB based on the email sent in the req.body
    const foundUser = await UserModel.findOne({ email: req.body.email });
    //if there is a user that is found, then we check if the passwords match with bcryptjs
    if (foundUser) {
      const doesPasswordMatch = bcryptjs.compareSync(
        req.body.password,
        foundUser.password
      );
      //if the passwords match and the email was found then they get a JWT token and are logged in
      if (doesPasswordMatch) {
        //create a new variable that is just the _id of the user logging in and their username
        const loggedInUser = {
          _id: foundUser._id,
          username: foundUser.username,
        };
        //this is where we create the JWT token, because the email exists and the password matches
        const authToken = jwt.sign(
          //first argument is the data you want to store
          loggedInUser,
          //second argument is the secret phrase in the .env file
          process.env.TOKEN_SECRET,
          //third argument is the options saying when to expire and which algorithm to use
          { algorithm: "HS256", expiresIn: "6h" }
        );
        res.status(200).json({ message: "Login successful", authToken });
      } else {
        res.status(500).json({
          errorMessage: "Invalid password",
        });
      }
    } else {
      res.status(500).json({
        errorMessage: "Invalid email",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.patch("/update-user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

//the verify route takes the auth token from the frontend and checks it
router.get("/verify", isAuthenticated, (req, res) => {
  console.log("made it to the verify route", req.payload);
  if (req.payload) {
    res.status(200).json({ message: "Token valid", user: req.payload });
  } else {
    res.status(401).json({ message: "Invalid headers" });
  }
});

module.exports = router;
