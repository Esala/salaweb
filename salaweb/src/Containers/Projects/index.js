import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 import TopBar from 'app/Components/TopBar/index.js';
 import GlobalNav from 'app/Components/GlobalNav/index.js';


import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="projects">
        <TopBar>
          <GlobalNav active="projects" />
        </TopBar>
        <div className="container">
          <div className="col col-12">
            <div className="projects__project">
              <p className="p-b"><Link to="/projects/psychopharmacology-institute">Psychopharmacology Institute</Link></p>
              <p className="p-s">As Product Designer</p>
            </div>
            <div className="projects__project">
              <p className="p-b"><Link to="/projects/psychopharmacology-institute">Yacopini</Link></p>
              <p className="p-s">As Web/UI/UX Designer</p>
            </div>
            <div className="projects__project">
              <p className="p-b"><Link to="/projects/psychopharmacology-institute">El Mercadón</Link></p>
              <p className="p-s">As Product Designer</p>
            </div>
          </div>
        </div>
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
