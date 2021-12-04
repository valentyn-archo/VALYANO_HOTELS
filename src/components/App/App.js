import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import ScrollTop from 'im';
import Home from '../../pages/Home';
import Rooms from '../../pages/Rooms';
import SingleRoom from '../../pages/SingleRoom';
import Error from '../../pages/Error';

import './css/App.css';

const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/apartments/" component={Rooms} />
                <Route exact path="/apartments/:slug" component={SingleRoom} />
                <Route component={Error} />
            </Switch>
            <ScrollTop className="scroll-btn" />
        </Fragment>
    );
};

export default App;
