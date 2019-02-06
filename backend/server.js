const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routes");
const mongoose = require("./config/database");
const { secretKey, PORT } = require("./config");
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB Connection Error:")
);

app.set("secretKey", secretKey);
app.set("port", PORT);

app.use(logger("dev"));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-type, Accept, Authorization, x-api-key"
  );
  console.log(req);
  next();
});

app.use(router);
app.listen(app.get("port"), function() {
  console.log(`Node server listening on port ${app.get("port")}`);
});
