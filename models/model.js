import { Sequelize, DataTypes } from "./model.js";

const User = Sequelize.define('user', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  active: DataTypes.TINYINT
});

export default User;