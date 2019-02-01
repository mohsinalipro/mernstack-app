const router = require("express").Router();
const { LOGIN, SIGNUP } = require("./routes");

router.get(LOGIN, (req, res, next) => {
  res.send("Hello  login");
  next();
});
router.get(SIGNUP, (req, res, next) => {
  res.send("Hello signup");
  next();
});
module.exports = {
  router
};
