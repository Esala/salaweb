import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './ProjectsNav.css';

class ProjectsNav extends React.Component {
  componentDidMount() {
    //console.log(this.props.active);
  }

  render() {
    const { active } = this.props;
    let className = 'projects-nav ';

    return (
      <div className={className}>

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
          to="/projects/bebot"
          className={
            'projects-nav__link' +
            (active === "bebot" ? ' projects-nav__link-active' : '')
          }
        >
          BeBot
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
          to="/projects/subirats"
          className={
            'projects-nav__link' +
            (active === "subirats" ? ' projects-nav__link-active' : '')
          }
        >
          Ramón Subirats
        </Link>
        <Link
          to="/projects/amg"
          className={
            'projects-nav__link' +
            (active === "amg" ? ' projects-nav__link-active' : '')
          }
        >
          AMG
        </Link>


        <Link
          to="/projects/psychopharmacology-institute"
          className={
            'projects-nav__link' +
            (active === "psychopharmacology" ? ' projects-nav__link-active' : '')
          }
        >
          Psychopharmacology Institute
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
