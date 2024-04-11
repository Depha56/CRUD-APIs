const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
//middleware
app.use(express.json());
//routes
app.use("/api/products",productRoute);


app.get("/", (req, res) => {
  res.send("Hello from node API server!");
});

mongoose
  .connect(
    "mongodb+srv://dephaingabire:U67XMRlj76Er43sd@cluster0.0ufwjuf.mongodb.net/Node-API"
  )
  .then(() => {
    console.log("database connected");
    app.listen(5000, () => {
      console.log("server listening on port 5000");
    });
  })
  .catch(() => {
    console.log("not connected");
  });
