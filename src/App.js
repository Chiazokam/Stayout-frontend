import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers';
import News from './store/reduxSetupTestFiles/News';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/redux-test' component={News} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
