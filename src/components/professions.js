import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProfessions } from '../actions/index';
import { Link } from 'react-router';

class Professions extends Component {

  componentWillMount() {
    this.props.fetchProfessions();
  }

  renderProfessions() {
    return this.props.professions.map((profession) => {
      return (
        <div className="list-group" key={profession.id}>
          <ul>
            <Link to={"professions/"+profession.id}><li>{profession.profession}</li></Link>
          </ul>
        </div>
      )
    })
  }

  render() {
    return (
        <div>
        {this.renderProfessions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { professions: state.users.prof }
}

export default connect(mapStateToProps, { fetchProfessions})(Professions);
