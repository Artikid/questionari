const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const router = express.Router();
const path = require("path");

app.use(bodyParser.json());

app.use(cors());

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use(function(req, res, next) {
  setTimeout(next, Math.random() * 700);
});

router.get("/", (req, res) => {
  res.send("api works");
});

router.get("/surveys", (req, res) => {
  res.sendFile(path.join(path.dirname(__filename), "data", "survey-list.json"));
});

router.get("/students", (req, res) => {
  res.sendFile(
    path.join(path.dirname(__filename), "data", "student-list.json")
  );
});

router.post("/surveys", (req, res) => {
  const formData = req.body;
  formData.id = 123;
  res.send(formData);
});

app.use("/api", router);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
