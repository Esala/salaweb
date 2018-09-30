import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './ProjectsNav.css';

class ProjectsNav extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="projects-nav">
        <Link
          to="/"
          replace
          className="nav__link"
        >
          Phychopharmacology Institute
        </Link>
        <Link
          to="/projects"
          replace
          className="nav__link"
        >
          Yacopini
        </Link>
        <Link
          to="/projects"
          replace
          className="nav__link"
        >
          Aker
        </Link>
        <Link
          to="/projects"
          replace
          className="nav__link"
        >
          Cooking App
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
)(ProjectsNav);
