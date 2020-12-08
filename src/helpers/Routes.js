import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';

export default function Routes({ user }) {
  return (
        <Switch>
            <Route
            exact
            path='/'
            component={() => <Home user={user} />}
            />
            <Route
            exact
            path='/'
            component= {() => <Profile user={user} />}
            />
            <Route
            exact
            path='/'
            component= {() => <Articles user={user} />}
            />
        </Switch>
  );
}
