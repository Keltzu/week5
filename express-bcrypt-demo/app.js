const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/api/users", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Generate a salt (a random value added to the hash to increase security)
      const salt = await bcrypt.genSalt(10); // 10 rounds of salt generation
      // Hash the password with the salt
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user with the hashed password
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });