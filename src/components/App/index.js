// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import Posts from '../../containers/Posts';
import Post from '../../containers/Post';

// == Component
const App = () => (
  <Switch>
    <Route exact path='/' component={Posts} />
    <Route exact path='/post/:id' component={Post} />
  </Switch>
);

// == Export
export default App;
