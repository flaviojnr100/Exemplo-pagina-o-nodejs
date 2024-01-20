const {Sequelize} = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT_BD}/${process.env.DATABASE}`);

module.exports = sequelize


