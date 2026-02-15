require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const userModel = require("./Models/user").default;
const postModel = require("./Models/post");
const { alreadyLoggedIn, protectRoute } = require("./Middleware/auth");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", alreadyLoggedIn, (req, res) => {
  res.render("index");
});

app.get("/register", alreadyLoggedIn, (req, res) => {
  res.render("register");
});

app.get("/login", alreadyLoggedIn, (req, res) => {
  res.render("login");
});

app.get("/create-post", protectRoute, (req, res) => {
  res.render("create-post");
});

app.get("/feed", protectRoute, async (req, res) => {
  let allPost = await postModel.find().populate("user").sort({ createdAt: -1 });

  res.render("feed", { allPost });
});

app.post("/register", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      let createUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      console.log(createUser);
      res.redirect("/login");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.send("User not found.");
  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.cookie("token", token);
      res.redirect("/feed");
    } else {
      res.send("Invalid username and password.");
    }
  });
});

app.get("/dashboard", protectRoute, async (req, res) => {
  let logUser = await userModel.findById(req.user.userId);
  let userPost = await postModel.find({ user: req.user.userId });

  res.render("dashboard", { logUser, userPost });
});

app.post("/create-post", protectRoute, async (req, res) => {
  let { caption } = req.body;

  let post = await postModel.create({
    caption,
    image: "",
    user: req.user.userId,
  });
  console.log(post);
  res.redirect("/dashboard");
});

app.get("/user/:userid", protectRoute, async (req, res) => {
  if (req.params.userid === req.user.userId) {
    return res.redirect("/dashboard");
  }

  let profileUser = await userModel.findById(req.params.userid);
  let posts = await postModel.find({ user: req.params.userid });

  res.render("profile", { profileUser, posts });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
