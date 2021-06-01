let bcrypt = require('bcrypt');
const {Users} = require('../db/models');
const register = (req, res, next) => {
  Users.register(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => next(error.message))
};

const login =  (req, res, next) => {
  Users.authenticate(req.body)
    .then(user => {
      dataUser = {
        id: user.id,
        email: user.email,
        token: user.generateToken()
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
