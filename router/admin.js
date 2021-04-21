const express = require("express");
const router = express.Router();

const { SignUp, SignIn } = require("../controllers/admin");
const isAdmin = require("../middlewares/isAdmin");
const {
  // registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/Admin");

// router.post("/signup", registerValidation(), validation, SignUp);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAdmin, (req, res) => {
  res.send({ admin: req.admin, msg: "sucess" });
});

module.exports = router;
