import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Routers extends Component {
  render() {
    return (
      <div>
        <h1>Routers</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
        </ul>
        {this.props.children}</div>
    );
  }
}

export default Routers;