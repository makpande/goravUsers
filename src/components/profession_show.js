import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProfession, fetchUsers } from '../actions/index';
import { Link } from 'react-router';


class ProfessionShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchProfession(this.props.params.id);
    this.props.fetchUsers();
  }
//rendering users professions
renderUsersofProfession() {

  return this.props.users.map((user, i) => {
    const { profession } = this.props;
      var unames = [];
      for (i = 0; i < user.profession.length; i++) {
        if (user.profession[i] == profession.profession) {
          unames.push(user.firstName);
        }
      }

    return (
      <div className="list-group" key={user.id}>
        <p>{unames}</p>
      </div>
    )
  });
}
  render() {
    const { profession } = this.props;
    return (
      <div>
      <h3>{profession.profession}</h3>
      {this.renderUsersofProfession()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { profession: state.users.profession, users: state.users.all }
}

export default connect(mapStateToProps, { fetchProfession, fetchUsers })(ProfessionShow);
