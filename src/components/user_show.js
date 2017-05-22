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
    var listProf;
    for ( var i = 0; i < user.profession.length; i++) {
      unames.push(user.profession[i]);
    }

    this.props.professions.map((profession) => {
      // for (var index = 0; index < unames.length; index++) {
      //   if (unames[index] == profession.profession) {
      //     console.log(profession.id);
      //   }
      // }

        listProf = unames.map((uname) => {

          function onLinkClicked(uname, e) {
            var pId  = profession.id;
            { uname == profession.profession ? pId : "nothing"}
              console.log(uname);
              console.log(pId);
            this.context.router.push("professions/"+"8020dd946b6de9b0");
          }

          return (
            <p onClick={onLinkClicked.bind(this, uname)}>{uname}</p>
          )

        }
      );
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
