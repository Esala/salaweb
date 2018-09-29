import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Nav.css';

class Nav extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="nav">
        <Link
          to="/"
          replace
          className="nav__link"
        >
          Home
        </Link>
        <Link
          to="/projects"
          replace
          className="nav__link"
        >
          Projects
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
