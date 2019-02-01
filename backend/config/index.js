const config = require("./config");
if (process.env.NODE_ENV === "production") {
  module.exports = {
    ...config,
    host: process.env.host || "",
    dbURI: process.env.dbURI
  };
} else {
  module.exports = config;
}
