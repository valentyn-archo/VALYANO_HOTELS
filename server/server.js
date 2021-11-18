const {ApolloServer} = require('apollo-server');
const client = require('./dbConfig/config');
// const {sequelize} = require('./dbConfig/config');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs/typeDefs');

require('dotenv').config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions: {path: '/'}
});

server.listen().then(async ({url}) => {
    console.log(`🚀 Server ready at ${url}`);
    await client.connect();
    console.log('\n-----------------------------------\n');
    console.log('Connected successfully to mongodb - ✅');
});
