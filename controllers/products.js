const product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, brand, model, sort, select } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (brand) {
    queryObject.brand = { $regex: brand, $options: "i" };
  }
  if (model) {
    queryObject.model = { $regex: model, $options: "i" };
  }

  let apiData = product.find(queryObject);
  if (sort) {
    // let sortFix= sort.replace(","," ");
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    // let selectFix= select.replace(","," ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  /* Pagination Start*/
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);
  /* Pagination End*/

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
};

const getAllCategories = async (req, res) => {
  const myData = await product.find(req.query).select(" brand model price");
  // console.log(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllCategories };
