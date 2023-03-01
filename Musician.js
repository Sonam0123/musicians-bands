const {Sequelize, sequelize} = require('./db');
const { DataTypes } = require('sequelize');

// TODO - define the Musician model
let Musician = sequelize.define("Musician", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
})

module.exports = {
    Musician
};