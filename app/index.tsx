import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import { Router, Switch, Route } from 'react-router';
import { Provider as BumbagProvider } from 'bumbag';
import HomePage from './components/Home';

const history = createHashHistory();

document.addEventListener('DOMContentLoaded', () => {
  render(
    <>
      <BumbagProvider>
        <Router history={history}>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </BumbagProvider>
    </>,
    document.getElementById('root')
  );
});
