const { dbURI } = require("./");
const mongoose = require("mongoose");

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;
