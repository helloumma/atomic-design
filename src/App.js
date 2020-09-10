import React from 'react';
import PageOne from './components/pages/Example'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={PageOne} exact />
      </Switch>
    </main>
  );
}

export default App;
