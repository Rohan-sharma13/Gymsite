const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const Posts = require("./Routes/postRoutes");
const Members = require("./Routes/membershipRoutes");
const Courses = require("./Routes/coursesRoutes");
const Queries = require("./Routes/contactRoutes");
const Products = require("./Routes/productRoutes");
const Email = require("./Routes/sendEmail");
const cors = require("cors");
const path = require("path");

//parsing the post request for all the routes
app.use(body_parser.json());

//adding the cores
app.use(cors());

//Connecting to the database
mongoose.connect(
  process.env.MONGODB_URI || process.env.MONGODB_PASS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Up and running with mongoDB");
  }
);

//middleware for posts
app.use("/posts", Posts);

//middleware for members
app.use("/members", Members);

//middleware for courses
app.use("/courses", Courses);

//middleware for contact
app.use("/contact", Queries);

//middleware forthe product
app.use("/products", Products);

//middleware forthe ema
app.use("/sendEmail", Email);

const PORT = process.env.PORT || 8000;

//serve route if in production
app.get("/", async (req, res) => {
  res.status(200).send("Deployed on Heroku");
});

//listning to the port
app.listen(PORT, () => {
  console.log("listning to the port 8000");
});
