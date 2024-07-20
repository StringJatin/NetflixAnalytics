import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import jwt from "jsonwebtoken";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists with the given email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    // Encrypt the password using CryptoJS AES
    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();

    // Create a new user with the encrypted password
    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
    });

    // Save the user to the database
    const user = await newUser.save();
    
    // Send a success response
    return res.status(201).json(user);
  } catch (err) {
    console.error(err);
    // Send an error response
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(401).json("Wrong email or password");
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong email or password");
    }

    const accessToken = jwt.sign({
      id: user._id, isAdmin: user.isAdmin
    },
    process.env.SECRET_KEY,
    {expiresIn : "5d"}
    );

    const {password, ...info} = user._doc;

    res.status(200).json({...info, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});


export default router;
