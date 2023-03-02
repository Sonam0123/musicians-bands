const {Band} = require('./Band')
const {Musician} = require('./Musician')
//- In the `./index.js` file, before the `module.exports`, associate the two models. **Multiple musicians can be added to a Band.**


Band.hasMany(Musician);
Musician.belongsTo(Band);




module.exports = {
    Band,
    Musician
};
