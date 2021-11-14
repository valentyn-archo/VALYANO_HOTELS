const {ApolloServer} = require('apollo-server');
// const {sequelize} = require('./dbConfig/config');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs/typeDefs');

require('dotenv').config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions: {path: '/'}
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);

    // sequelize
    //     .authenticate()
    //     .then(() => console.log('Database connected!!'))
    //     .catch((err) => console.log(err));
});
