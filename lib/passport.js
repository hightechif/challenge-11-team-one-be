const passport = require('passport')
const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const {Users} = require('../db/models')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // bearer token
  // jwtFromRequest: ExtractJwt.fromHeader('authorization'), // header
  secretOrKey: 'strong-secret'
}

/* Authentication Function */
const authenticate = async (payload, done) => {
  try {
    const user = await Users.findByPk(payload.uid);
    return done(null, user)
  } catch (err) {
    return done(null, false, {message: err.message})
  }
}

passport.use(new JwtStrategy(options, authenticate));

module.exports = passport;
