import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';


import './Maps.css';

class Maps extends React.Component {
  componentDidMount() {document.title = "Some Maps - Ezequiel Salatino";}

  render() {

    return (
      <div className="maps">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="maps"/>
        </TopBar>
        <ProjectStructure title="Some Maps" color="#F8ECF0" description="Some maps created for a couple of websites." next="/projects/psychopharmacology-institute" >
          aca van las imagenes
        </ProjectStructure>
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
)(Maps);