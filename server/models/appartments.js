const Sequelize = require('sequelize');
const db = require('../dbConfig/config');

const Appartments = db.define(
    'appartments',
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        slug: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        size: {
            type: Sequelize.STRING
        },
        capacity: {
            type: Sequelize.INTEGER
        },
        pets: {
            type: Sequelize.BOOLEAN
        },
        breakfast: {
            type: Sequelize.BOOLEAN
        },
        featured: {
            type: Sequelize.BOOLEAN
        },
        description: {
            type: Sequelize.TEXT
        }
    },
    {
        timestamps: false
    }
);

module.exports = Appartments;
