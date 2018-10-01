import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import scrollToComponent from 'react-scroll-to-component';


import './Cooking.css';

class Cooking extends React.Component {
  componentDidMount() {
    document.title = "Cooking App Ideas - Ezequiel Salatino";
    scrollToComponent(this.projectSection, { offset: 0, align: 'top', duration: 1500, ease:'inOutCirc'});
}

  render() {

    return (
      <div className="cooking">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="cooking"/>
        </TopBar>
        <ProjectStructure ref={(section) => { this.projectSection = section; }} title="Cooking App Ideas" color="#FFF8F0" description="Nov 2018. UI design. iOS Application."  next="/projects/some-maps" >
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
)(Cooking);
