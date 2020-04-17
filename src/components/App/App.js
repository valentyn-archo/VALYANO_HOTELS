import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home';
import Rooms from '../../pages/Rooms';
import SingleRoom from '../../pages/SingleRoom';
import Error from '../../pages/Error';
import ScrollTop from 'im';

import './css/App.css';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" component={Rooms} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route component={Error} />
            </Switch>
            <ScrollTop className="scroll-btn" />
        </Fragment>
    );
};

export default App;
