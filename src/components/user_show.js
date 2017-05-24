import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchProfessions } from '../actions/index';
import { Link } from 'react-router';

class UserShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.id);
    this.props.fetchProfessions();
  }

  render() {
    //data from user profile
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>
    }

    var unames = [];
    var pId;
    var listProf;

    for ( var i = 0; i < user.profession.length; i++) {
      unames.push(user.profession[i]);
    }

    this.props.professions.map((profession) => {
      listProf = unames.map((uname) => {

        function onLinkClicked(uname, e) {
          var professions = this.props.professions;

          Object.keys(professions).forEach(function (key) {
            var val = professions[key];
            if (val.profession == uname) {
              pId = val.id;
            }
          });
          this.context.router.push("professions/"+ pId);

        }
        return (
          <p><button onClick={onLinkClicked.bind(this, uname)}>{uname}</button></p>
        )
      });
    });

      return (

        <div>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          {listProf}
          <img src={user.image}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.users.user, professions: state.users.prof }
}

export default connect(mapStateToProps, { fetchUser, fetchProfessions })(UserShow);
