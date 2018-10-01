import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';


import './Psychopharmacology.css';

class Psychopharmacology extends React.Component {
  componentDidMount() {document.title = "Psychopharmacology Institute - Ezequiel Salatino";}

  render() {

    return (
      <div className="psychopharmacology">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="psychopharmacology"/>
        </TopBar>
        <ProjectStructure title="Psychopharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. Web / UI design. Educational platform." next="/projects/yacopini" >
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
)(Psychopharmacology);
