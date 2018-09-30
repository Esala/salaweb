import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './GlobalNav.css';

class GlobalNav extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="global-nav">
        <Link
          to="/"
          replace
          className="nav__link"
        >
          home
        </Link>
        <Link
          to="/info"
          replace
          className="nav__link"
        >
          info
        </Link>
        <Link
          to="/projects"
          replace
          className="nav__link"
        >
          currently working
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
)(GlobalNav);
