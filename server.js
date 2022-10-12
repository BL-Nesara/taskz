const express = require("express");
const cors = require("cors");
const path = require("path");
const assert = require("assert");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRoute = require("./route/taskRoute");

dotenv.config();

const port = process.env.PORT || Number(5000);

const app = express();

//body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//view engines
app.set("view engine", "ejs");
app.set("views", "./views");

//default route
app.use(`/`, taskRoute);

//pnf route
app.all(`*`, (req, res) => {
  res.render("pnf"); //render is used for view engine template files
});

//server call
app.listen(port, () => {
  console.log(`server is running @ http://localhost:${port}`);
});
