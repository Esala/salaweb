import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';


import './Yacopini.css';

class Yacopini extends React.Component {
  componentDidMount() {document.title = "Yacopini - Ezequiel Salatino";}

  render() {

    return (
      <div className="yacopini">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="yacopini"/>
        </TopBar>
        <ProjectStructure title="Yacopini" color="#FE5620" description="Apr 2015. Web / UI design. Volkswagen, Chevrolet & Nissan official car dealer." light next="/projects/el-mercadon" >
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
)(Yacopini);
