import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider as Provider
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql/',
    cache: new InMemoryCache()
});

export default function ApolloProvider(props) {
    return <Provider client={client} {...props} />;
}
