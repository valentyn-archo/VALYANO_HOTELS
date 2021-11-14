/* eslint-disable no-unreachable */
/* eslint-disable no-useless-catch */
const data = require('../data');

module.exports = {
    Query: {
        getApartments: async (_, __, {apartments}) => {
            if (process.env.NODE_ENV === 'development') {
                return data;
            }

            try {
                return {apartments};
            } catch (err) {
                throw err;
            }
        }
    }
};
