import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './GlobalNav.css';

class GlobalNav extends React.Component {
  componentDidMount() { }

  render() {
    const { active } = this.props;

    let className = 'global-nav ';

    return (
      <div className={className}>
        <div className="global-nav__home-link-container">
          <Link
            to="/"
            className="global-nav__home-link"
          >
            Salatino.
          </Link>
        </div>

        <Link
          to="/info/"
          className= {
            'global-nav__link' +
            (active === "info" ? ' global-nav__link-active' : '')
          }
        >
          info
        </Link>
        <Link
          to="/projects/"
          className= {
            'global-nav__link' +
            (active === "projects" ? ' global-nav__link-active' : '')
          }
        >
          work
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
