const express = require("express");
const router = express.Router();
const { SignUp, SignIn } = require("../controllers/user.controller");

const isUser = require("../middlewares/isUser");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");

router.post("/signup", registerValidation(), validation, SignUp);
router.post("/signin", signinValidation(), validation, SignIn, isUser);
router.get("/current", isUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
