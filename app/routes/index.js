// @flow

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './toplevel';
import Dashboard from './dashboard';
import Contact from './contact';
import About from './about';
import Login from './login';
import Search from './search';
import { NotFound } from './errors';

type Props = {
  history: any
};

export default class Router extends Component<Props> {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <App>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </ConnectedRouter>
    );
  }
}
