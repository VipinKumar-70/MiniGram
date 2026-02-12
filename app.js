const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const userModel = require("./Models/user");
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

app.get("/post", protectRoute, (req, res) => {
  res.render("post");
});

app.get("/feed", protectRoute, (req, res) => {
  res.render("feed");
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
      let token = jwt.sign({ userId: user._id }, "demoKey");
      res.cookie("token", token);
      res.redirect("/feed");
    } else {
      res.send("Invalid username and password.");
    }
  });
});

app.get("/dashboard", protectRoute, async (req, res) => {
  let logUser = await userModel.findById(req.user.userId);

  res.render("dashboard", { logUser });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
