const url = require("url");
const { INDEX, LOGIN, SIGNUP } = require("./routes");
function router(req, res) {
  const baseURI = url.parse(req.url);

  const { pathname } = baseURI;

  switch (pathname) {
    case INDEX:
      res.writeHead(200);
      res.end("HOME PAGE");
      break;
    case LOGIN:
      res.writeHead(200);
      res.end("LOGIN PAGE");
      break;
    case SIGNUP:
      res.writeHead(200);
      res.end("SIGNUP PAGE");
      break;
    default:
      res.writeHead(404);
      res.end("404 NOT FOUND");
  }
}
module.exports = router;
