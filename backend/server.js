const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/posts", postRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});