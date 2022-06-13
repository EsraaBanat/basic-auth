'use strict';

// Create a Sequelize model
const Users = (sequelize, DataTypes) =>
  sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  //   email: {
  //     type: DataTypes.STRING,
  // },
  //   fullname: {
  //   type: DataTypes.STRING,
  // },
  //   role: {
  //       type: DataTypes.STRING,
  //       validate: {
  //           isIn: [['admin', 'editor','writer','user']], 
  //       }
  // }
});

module.exports = Users;