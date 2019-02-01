const http = require("http");
const { PORT } = require("./config");
const router = require("./router");

function server(req, res) {
  router(req, res);
}

http.createServer(server).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
