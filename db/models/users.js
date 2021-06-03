const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static encrypt = (password) => {
      return bcrypt.hashSync(password, 10)
    }

    static register = ({email, password}) => {
      const encryptedPassword = this.encrypt(password)
      return this.create({
        email,
        password: encryptedPassword,
      })
    }

    checkPassword = (password) => bcrypt.compareSync(password, this.password);

    static authenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email }})
        if (!user) {
          return Promise.reject("User not found!");
        }
        const isPasswordValid = user.checkPassword(password)
        if (!isPasswordValid) {
          return Promise.reject("Wrong password")
        }
        return Promise.resolve(user)
      } catch(err) {
        return Promise.reject(err.message)
      }
    }

    generateToken = () => {
      const payLoad = {
        id: this.id,
        email: this.email
      }

      const secretKey = 'strong-secret';

      const token = jwt.sign(payLoad, secretKey, { expiresIn: '24h' });
      return token;
    }

  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};