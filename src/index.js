/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ApolloProvider from './components/ApolloProvider/ApolloProvider';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import RoomProvider from './context/context';

ReactDOM.render(
    <ApolloProvider>
        <RoomProvider>
            <Router>
                <App />
            </Router>
        </RoomProvider>
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
