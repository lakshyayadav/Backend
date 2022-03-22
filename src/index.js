const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const { dbConnection } = require("./services/db");
const cors = require("cors");
const {
  createUser,
  downloadUserFile,
} = require("./controller/user.controller");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();
dbConnection();

app.listen(process.env.PORT, () => {
  console.log("listening at port", process.env.PORT);
});

app.post("/register", createUser);
app.get("/download", downloadUserFile);
