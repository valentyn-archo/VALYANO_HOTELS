import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider as Provider,
    createHttpLink,
    split
} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';

let httpLink = createHttpLink({
    uri: '/graphql/'
});

const host = window.location.host;

const wsLink = new WebSocketLink({
    uri: `ws://${host}/graphql/`,
    options: {
        reconnect: true
    }
});

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink, // uri: 'http://localhost:4000/graphql/'
    cache: new InMemoryCache()
});

export default function ApolloProvider(props) {
    return <Provider client={client} {...props} />;
}
