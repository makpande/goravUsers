import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/index';
import { Link } from 'react-router';



class Users extends Component {
//fetching users from users reducer
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {

      return (
        <div className="thumbnail" key={user.id}>
          <img className="pull-left" src={user.image}/>
          <div className="caption">
            <h4 className="pull-right"><strong>{user.username}</strong></h4>
            <Link to={"users/"+user.id}><h4>{user.firstName}</h4></Link>
          </div>
        </div>
      );
    });
  }

  render() {

    return (
        <div>
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

//maping users reducer
function mapStateToProps(state) {
  return { users: state.users.all };
}

export default connect(mapStateToProps, { fetchUsers })(Users);
