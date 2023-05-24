const express = require('express');
const router = express.Router();

const {getAllProducts, getAllCategories, postProduct} = require("../controllers/products");

 router.route("/").get(getAllProducts);
 router.route("/categories").get(getAllCategories);


 module.exports = router;   