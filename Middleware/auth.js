const jwt = require("jsonwebtoken");

// Middleware - logged in
function alreadyLoggedIn(req, res, next) {
  const token = req.cookies.token;

  if (token) {
    return res.redirect("/feed");
  }

  next();
}

// Middleware - without logged in
function protectRoute(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");
  else {
    let data = jwt.verify(token, "demoKey");
    req.user = data;
    next();
  }
}

module.exports = {
  alreadyLoggedIn,
  protectRoute,
};
