import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="projects">
        <h1>Projects page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus commodi voluptates reiciendis voluptas aut. Alias dolorem ea eius error quas quisquam dignissimos repudiandae reiciendis, id beatae! Doloremque hic asperiores provident.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus commodi voluptates reiciendis voluptas aut. Alias dolorem ea eius error quas quisquam dignissimos repudiandae reiciendis, id beatae! Doloremque hic asperiores provident.</p>
        <Link
          to="/"
          className="link"
        >
          Home
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
)(Projects);
