const {Sequelize, sequelize} = require('./db');
const { DataTypes } = require('sequelize');

// TODO - define the Musician model
let Song = sequelize.define("Song", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
})

module.exports = {
    Song,
    Sequelize
};