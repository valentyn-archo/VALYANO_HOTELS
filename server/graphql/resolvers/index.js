const apartmentResolvers = require('./apartments');

module.exports = {
    Query: {
        ...apartmentResolvers.Query
    }
};
