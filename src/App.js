import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import stores from '@stores';
import Home from '@views/Home';
import Login from '@views/Login';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/home" exact component={Home} /> */}
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
