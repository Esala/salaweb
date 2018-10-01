import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import scrollToComponent from 'react-scroll-to-component';


import './Yacopini.css';

class Yacopini extends React.Component {
  componentDidMount() {
    document.title = "Yacopini - Ezequiel Salatino";
      scrollToComponent(this.projectSection, { offset: 0, align: 'top', duration: 1, ease:'inOutCirc'});
}

  render() {

    return (
      <div className="yacopini">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="yacopini"/>
        </TopBar>
        <ProjectStructure ref={(section) => { this.projectSection = section; }} title="Yacopini" color="#FE5620" description="Apr 2015. Web / UI design. Volkswagen, Chevrolet & Nissan official car dealer." light next="/projects/el-mercadon" >
          <div className="col col-12">
            ...
          </div>
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
