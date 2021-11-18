const {gql} = require('apollo-server');

module.exports = gql`
    type Apartment {
        id: Int!
        name: String!
        slug: String!
        type: String!
        price: Int!
        size: Int!
        capacity: Int!
        pets: Boolean!
        breakfast: Boolean!
        featured: Boolean!
        description: String!
        extras: [String]!
        images: [Image]
        coordinates: Points!
    }
    type Image {
        url: String
    }
    type Points {
        lat: Float!
        lng: Float!
    }
    type Query {
        getApartments: [Apartment]!
    }
`;
