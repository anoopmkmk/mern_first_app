const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();// ✅ Define app before using it
app.use(express.json());
app.use(cors());



MONGO_URI = "mongodb+srv://anoop:He3BrHGDNkU0hQpL@cluster0.bxsr5is.mongodb.net/sweet_assist?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas', err));
  const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
  });
const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes); // Prefix routes with "/api"
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
});


