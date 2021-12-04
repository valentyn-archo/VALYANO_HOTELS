/* eslint-disable no-console */
const {ApolloServer} = require('apollo-server');
const client = require('./dbConfig/config');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs/typeDefs');
const server = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions: {path: '/'}
});

server.listen().then(async ({url, subscriptionsUrl}) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 Server ready at ${subscriptionsUrl}`);
    await client.connect();
    console.log('\n-----------------------------------\n');
    console.log('Connected successfully to mongodb - ✅');
});
