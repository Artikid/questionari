const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const path = require("path");

app.use(cors());

app.get("/", function(req, res) {
  res.send("Hello World!");
});

router.get("/", (req, res) => {
  res.send("api works");
});

router.get("/surveys", (req, res) => {
    res.sendFile(path.join(path.dirname(__filename),"data","survey-list.json"));
  });

app.use("/api", router);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
