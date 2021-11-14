const Sequelize = require('sequelize');
const db = require('../config');
const Appartments = require('./appartments');

const Coordinates = db.define(
    'coordinates',
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        x: {
            type: Sequelize.FLOAT
        },
        y: {
            type: Sequelize.FLOAT
        },
        appartment_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);

Coordinates.belongsTo(Appartments, {foreignKey: 'appartment_id'});
module.exports = Coordinates;
