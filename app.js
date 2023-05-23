require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require('cors')

app.use(cors({
  origin: '*'
}))

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");
const { connect } = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

// set router
app.use("/api/products", products_routes);

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
