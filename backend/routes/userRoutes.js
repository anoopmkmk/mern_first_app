const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import User model
const sendMail = require("../utils/mailer");

//Route to fetch all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 }).limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

// Route to register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();

    await sendMail(
      email,
      "Welcome to Our App",
      `Hello ${name}, Welcome to our platform!`,
      `<h1>Hello ${name}</h1><p>Welcome to our platform!</p>`
    );
    
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});
// Route to delete a user
router.delete("/users/:id", async (req, res) => {
      try {
        const userId = req.params.id;

      // Validate MongoDB ObjectId
      

      // Check if user exists before deleting
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await User.findByIdAndDelete(userId);
      res.json({ message: "User deleted successfully" });

    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json(error);
    }
});

module.exports = router;
