import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';


import './Mercadon.css';

class Mercadon extends React.Component {
  componentDidMount() {document.title = "El Mercadón - Ezequiel Salatino";}

  render() {

    return (
      <div className="mercadon">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="mercadon"/>
        </TopBar>
        <ProjectStructure title="El Mercadón" color="#1C42A1" description="Nov 2017. Branding. Product design. Web / UI design. E-commerce." light next="/projects/cooking-app" >
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
)(Mercadon);
