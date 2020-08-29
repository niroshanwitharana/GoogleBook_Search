const express = require("express");
const mongoose = require ("mongoose");
const routes= require ("./routes");

const PORT = process.env.PORT || 3003;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connet to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// MONGODB_URI=mongodb+srv://niroshan:niro7517@cluster0.to55p.mongodb.net/googlebook?retryWrites=true&w=majority