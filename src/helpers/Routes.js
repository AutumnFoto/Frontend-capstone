import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';
import Profile from '../Views/Profile';
import Articles from '../Views/Articles';
import NotFound from '../Views/NotFound';

export default function Routes({ user }) {
  return (
        <Switch>
            <Route
            exact
            path='/Home'
            component={() => <Home user={user} />}
            />
            <Route
            exact
            path='/profile'
            component= {() => <Profile user={user} />}
            />
            <Route
            exact
            path='/articles'
            component= {() => <Articles user={user} />}
            />
             <Route component={NotFound} />
        </Switch>
  );
}
