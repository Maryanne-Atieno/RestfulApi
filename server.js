const mongoose = require("mongoose");
const express = require("express");
const app = express();
const getRoutes = require("./routes/signupRoutes");

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users/auth/signup", getRoutes);

//CONNECTING TO THE DATABASE
mongoose.connect(
  "mongodb://localhost:27017/KakamegaDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to database!")
);

//LISTENING TO PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
