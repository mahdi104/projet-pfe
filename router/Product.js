const express = require("express");
//express Router
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin");

// require controllers

const {
  create,
  Retrieve,

  deleteProduct,
  editProduct,
  getProductByCategories,
} = require("../controllers/product.controller");

/**
   @desc : testRoutes  
   @path : http://localhost:7000/api/product/test
   @method : Post
   @data : no data
   @access : public/private
  */
router.post("/test", (req, res) => {
  res.send("hello world");
});

router.post("/", isAdmin, create);
router.get("/", isAdmin, Retrieve);
router.delete("/:_id", isAdmin, deleteProduct);
router.put("/:_id", isAdmin, editProduct);
router.get("/categorie/:cat", isAdmin, getProductByCategories);

module.exports = router;
