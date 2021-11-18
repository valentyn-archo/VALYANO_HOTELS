/* eslint-disable no-unused-vars */
const client = require('../../dbConfig/config');

module.exports = {
    Query: {
        getApartments: async (_, __) => {
            const collection = client
                .db('valyano_booking')
                .collection('apartments');

            // return data;
            return await collection.find({}).toArray();
        }
    }
};
