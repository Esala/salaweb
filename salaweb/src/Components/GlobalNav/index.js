import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import { Link } from 'react-router-dom';


import './GlobalNav.css';

class GlobalNav extends React.Component {
  componentDidMount() { }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;

    const { active, inProject } = this.props;

    let className = 'global-nav ' +
      (inProject ? ' global-nav-in-project' : '') ;

    let mobileNav;
    let desktopNav;

    if(inProject){
      mobileNav = (
        <Link
          to="/projects/"
          className="global-nav__home-link"
        >
          Back
        </Link>
      );
      desktopNav = (
        <Link
          to="/projects"
          className="global-nav__home-link"
        >
          Back
        </Link>
      );
    }else {
      mobileNav = (
        <Link
          to="/"
          className="global-nav__home-link"
        >
          Home
        </Link>
      );
      desktopNav = (
        <Link
          to="/"
          className="global-nav__home-link"
        >
          Home
        </Link>
      );
    }

    return (
      <div className={className}>
        <div className="global-nav__home-link-container">
          <Desktop>
            {desktopNav}
          </Desktop>
          <Mobile>
            {mobileNav}
          </Mobile>
        </div>

        <Link
          to="/about/"
          className= {
            'global-nav__link' +
            (active === "info" ? ' global-nav__link-active' : '')
          }
        >
          About
        </Link>
        <Link
          to="/projects/"
          className= {
            'global-nav__link' +
            (active === "projects" ? ' global-nav__link-active' : '')
          }
        >
          Projects
        </Link>

        <a href="mailto:ezequiel.salatino@gmail.com" className="global-nav__email-link">
          Let’s Talk!
        </a>

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
