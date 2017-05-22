import React, { Component } from 'react';

export default class Nav extends Component {


  render() {

    return (
      <div className="container">
        <a className="btn btn-primary" href="/users">Users</a>
        <a className="btn btn-primary pull-right" href="/professions">Professions</a>
      </div>
    );
  }
}
