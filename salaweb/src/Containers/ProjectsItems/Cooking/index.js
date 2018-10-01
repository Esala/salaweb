import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';


import './Cooking.css';

class Cooking extends React.Component {
  componentDidMount() {document.title = "Cooking App Ideas - Ezequiel Salatino";}

  render() {

    return (
      <div className="cooking">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="cooking"/>
        </TopBar>
        <ProjectStructure title="Cooking App Ideas" color="#FFF8F0" description="Nov 2018. UI design. iOS Application."  next="/projects/psychopharmacology-institute" >
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
)(Cooking);
