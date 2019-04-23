import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

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