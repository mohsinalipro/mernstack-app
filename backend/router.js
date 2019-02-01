const url = require("url");
const { INDEX, LOGIN, SIGNUP } = require("./routes");
function router(req, res, next) {
  const baseURI = url.parse(req.url);
  console.log(baseURI);
  const { pathname } = baseURI;

  switch (pathname) {
    case INDEX:
      res.writeHead(200);
      res.send("HOME PAGE");
      break;
    case LOGIN:
      res.writeHead(200);
      res.send("LOGIN PAGE");
      break;
    case SIGNUP:
      res.writeHead(200);
      res.send("SIGNUP PAGE");
      break;
    default:
      res.writeHead(404);
      res.send("404 NOT FOUND");
  }

  if (typeof next === "function") next();
}
module.exports = router;
