import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context/context';

ReactDOM.render(
    <RoomProvider>
        <Router>
            <App />
        </Router>
    </RoomProvider>, document.getElementById('root'));

serviceWorker.unregister();
