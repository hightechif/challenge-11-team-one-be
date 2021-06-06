const { Users } = require('../db/models');

// Register Controller
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

// Login Controller
const login = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      result: "FAILED",
      message: "email or password field cannot be empty."
    });
    return;
  }
  
  Users.authenticate(req.body)
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

// Whoami Controller
const whoami = (req, res) => {
  /* req.user adalah instance dari User Model, hasil autentikasi dari passport. */
  console.log(req);
  res.status(200).json(req.user);
}

module.exports = {
  register,
  login,
  whoami
};