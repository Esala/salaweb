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

    const { active, inProject, inPost, postTitle } = this.props;

    let className = 'global-nav ' +
      (inProject ? ' global-nav-in-project' : '') +
      (inPost ? ' global-nav-in-post' : '') ;

    let mobileNav;
    let desktopNav;
    var postTitleElement;
    if(inPost && postTitle){
      postTitleElement = (
        <div className="global-nav__post-title">
          {postTitle}
        </div>
      )
    }

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
      if(inPost){
        mobileNav = (
          <Link
            to="/blog/"
            className="global-nav__home-link"
          >
            Back
          </Link>
        );
        desktopNav = (
          <Link
            to="/blog"
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
        {postTitleElement}
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

        <Link
          to="/blog/"
          className= {
            'global-nav__link' +
            (active === "blog" ? ' global-nav__link-active' : '')
          }
        >
          Blog
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
