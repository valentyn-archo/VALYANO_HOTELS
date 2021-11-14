const Sequelize = require('sequelize');
const db = require('../dbConfig/config');
const Appartments = require('./appartments');

const Extras = db.define(
    'extras',
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        info: {
            type: Sequelize.STRING
        },
        appartment_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);

Extras.belongsTo(Appartments, {foreignKey: 'appartment_id'});
module.exports = Extras;
