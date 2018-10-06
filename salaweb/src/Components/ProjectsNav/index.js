import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './ProjectsNav.css';

class ProjectsNav extends React.Component {
  componentDidMount() {}

  render() {
    const { active } = this.props;
    let className = 'projects-nav ';

    return (
      <div className={className}>
        <Link
          to="/projects/psychopharmacology-institute"
          className={
            'projects-nav__link' +
            (active === "psychopharmacology" ? ' projects-nav__link-active' : '')
          }
        >
          Psychopharmacology Institute
        </Link>
        <Link
          to="/projects/yacopini"
          className={
            'projects-nav__link' +
            (active === "yacopini" ? ' projects-nav__link-active' : '')
          }
        >
          Yacopini
        </Link>
        <Link
          to="/projects/el-mercadon"
          className={
            'projects-nav__link' +
            (active === "mercadon" ? ' projects-nav__link-active' : '')
          }
        >
          El Mercadón
        </Link>
        <Link
          to="/projects/cooking-app"
          className={
            'projects-nav__link' +
            (active === "cooking" ? ' projects-nav__link-active' : '')
          }
        >
          Cooking App
        </Link>
        <Link
          to="/projects/some-maps"
          className={
            'projects-nav__link' +
            (active === "maps" ? ' projects-nav__link-active' : '')
          }
        >
          Some Maps
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
