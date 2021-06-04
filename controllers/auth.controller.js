let bcrypt = require('bcrypt');
const {Users} = require('../db/models');
const register = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      result: "FAILED",
      message: "email or password field cannot be empty."
    });
    return;
  }

  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  Users.register(user)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => next(error.message))
};

const login =  (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      result: "FAILED",
      message: "email or password field cannot be empty."
    });
    return;
  }
  const user = {
    email: req.body.email,
    password: req.body.password, // reminder : it is bad practice to store password in plain text
  };
  Users.authenticate(user)
    .then(data => {
      dataUser = {
        id: data.id,
        email: data.email,
        token: data.generateToken()
      }
      res.status(200).json(dataUser)
    })
    .catch(error => {
      return next(error.message)
    })
}

module.exports = {
  register,
  login
};
