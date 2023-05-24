require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require('cors');
const product = require("./models/product");


app.use(cors({
  origin: '*'
}))

app.use(express.json());

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");
const { connect } = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

// set router
app.use("/api/products", products_routes);



// POST Data in mongo DB
app.post("/postproduct", async(req,res)=>{
  try {
    const addProduct = new product(req.body)
    // console.log(req.body);
    addProduct.save();
 
  } catch (e) {
    res.send(e)
    
  }


})

const Start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} YES I AM CONNECTED`);
    });
  } catch (error) {
    console.log(error);
  }
};

Start();
