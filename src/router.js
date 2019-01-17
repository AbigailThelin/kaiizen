import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

export default (
    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Login} path='/' exact />
    </Switch>
);