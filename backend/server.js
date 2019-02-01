const express = require("express");
const app = express();
const router = require("./router");

const { PORT } = require("./config");
app.set("port", PORT);

app.use(router);

app.listen(app.get("port"), "localhost", () => {
  console.log(`Server is running on port ${PORT}`);
});
