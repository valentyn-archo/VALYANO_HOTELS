const Sequelize = require('sequelize');
const db = require('../config');
const Appartments = require('./appartments');

const Images = db.define('images', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    img: {
        type: Sequelize.STRING
    },
    appartment_id: {
        type: Sequelize.INTEGER
    }
}, {
  timestamps: false
});

Images.belongsTo(Appartments, {foreignKey: 'appartment_id'});
module.exports = Images;