const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  signup: (req, res, next) => {
    const { name, email, username, password } = req.body;
    userModel
      .create({
        name,
        email,
        username,
        password
      })
      .then(modelRes => {
        const token = jwt.sign({ id: modelRes._id }, req.app.get("secretKey"), {
          expiresIn: "1h"
        });
        modelRes["token"] = token;

        modelRes.password = undefined; // hide password
        successResponse(res, "You have successfully signed up.", {token});
        next();
      })
      .catch(err => {
        exceptionResponse(res, "Something went wrong, please try again.", err);
        next();
      });
  },

  login: (req, res, next) => {
    userModel
      .findOne({ username: req.body.username })
      .then(modelResult => {
        if (bcrypt.compareSync(req.body.password, modelResult.password)) {
          const token = jwt.sign(
            { id: modelResult._id },
            req.app.get("secretKey"),
            {
              expiresIn: "1h"
            }
          );

          modelResult.password = undefined;

          successResponse(res, "Logged in successfully.", { token });
          next();
        } else {
          forbiddenResponse(res, "Invalid username or password.");
          next();
        }
      })
      .catch(err => {
        exceptionResponse(res, "Something went wrong, please try again.", err);
        next();
      });
  },

  getInfo: (req, res, next) => {
    const { token } = req.body;
    jwt.verify(token, req.app.get("secretKey"), (err, decoded) => {
      if (!err) {
        userModel
          .findOne({ _id: decoded.id })
          .then(modelRes => {
            // hide password
            modelRes.password = undefined;
            res.json({
              status: "success",
              message: "User info retrived successfully.",
              data: modelRes
            });
            next();
          })
          .catch(err => {
            exceptionResponse(
              res,
              "Something went wrong, please try again.",
              err
            );
            next();
          });
      } else {
        forbiddenResponse(res, "Unable to retrive user info.", err);
        next();
      }
    });
  }
};

// success response
function successResponse(res, message, data = null) {
  res.status(200).json({
    status: "success",
    message,
    data
  });
}
// forbidden response
function forbiddenResponse(
  res,
  message = "Unable to process your request.",
  data = null
) {
  res.status(403).json({
    status: "forbidden",
    message,
    data
  });
}

// exception response
function exceptionResponse(res, message, data = null) {
  res.status(500).json({
    status: "error",
    message,
    data
  });
}
