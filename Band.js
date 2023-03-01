const {Sequelize, sequelize} = require('./db');
const { DataTypes } = require('sequelize');
// TODO - define the Band model
let Band =sequelize.define("Band", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
})

module.exports = {
    Band
};