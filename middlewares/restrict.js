const passport = require("../lib/passport");

// Restrict Middleware
const restrict = (req, res, next) => {
  return passport.authenticate('jwt', {
    session: false
  })(req, res, next)
}

module.exports = {
  restrict
};
