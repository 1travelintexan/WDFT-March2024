const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const uploader = require("../middlewares/cloudinary.config.js");
const nodemailer = require("nodemailer");

const sendMail = (userEmail) => {
  //first return a new promise thats trying to send the email
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_APP_EMAIL,
        pass: process.env.NODEMAILER_APP_PASSWORD,
      },
    });
    //this configs the mail that is being send, the subject and body of the email
    const mail_configs = {
      from: process.env.NODEMAILER_APP_EMAIL,
      to: userEmail,
      subject: "Testing for nodemailer",
      // text: "Just checking, let me know",
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background-color: black;
      }
        
    </style>
  </head>
  <body>
    <h1>is the background black</h1>
  </body>
</html>
`,
    };
    //this is what is actually sending the main
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log("Houston we have a problem", error);
        return rej({ message: `there was a problem sending`, error });
      } else {
        console.log("It was all good!", info);
        res({ message: "Everything was all good" });
      }
    });
  });
};

//signup route with image from front end
router.post("/signup", uploader.single("imageUrl"), async (req, res) => {
  sendMail("horheyinc8@gmail.com")
    .then((res) => {
      console.log("the response to the nodemailer", res);
    })
    .catch((err) => console.log(err));
  let userImage;
  if (req.file) {
    userImage = req.file.path;
  }
  console.log("here is the file from cloudinary", req.file);

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

      const createdUser = await UserModel.create({
        ...req.body,
        password: hashedPassword,
        userImage,
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
        res
          .status(200)
          .json({ message: "Login successful", authToken: authToken });
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

//this is the profile route that gets all the info for the current user from the DB
router.get("/profile/:userId", async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.userId);
    console.log("current user", currentUser);
    res.status(200).json(currentUser);
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
