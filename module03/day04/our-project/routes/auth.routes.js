const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");

router.post("/signup", async (req, res) => {
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
    const foundUser = await UserModel.findOne({ email: req.body.email });
    if (foundUser) {
      const doesPasswordMatch = bcryptjs.compareSync(
        req.body.password,
        foundUser.password
      );
      if (doesPasswordMatch) {
        res.status(200).json({ message: "Login successful", user: foundUser });
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

module.exports = router;
