import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import scrollToComponent from 'react-scroll-to-component';


import './Psychopharmacology.css';

class Psychopharmacology extends React.Component {
  componentDidMount() {
    document.title = "Psychopharmacology Institute - Ezequiel Salatino";
    scrollToComponent(this.projectSection, { offset: 0, align: 'top', duration: 1500, ease:'inOutCirc'});
  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;
    return (
      <div className="psychopharmacology">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="psychopharmacology"/>
        </TopBar>
        <Desktop>
          <ProjectStructure ref={(section) => { this.projectSection = section; }} title="Psychopharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. Web / UI design. Educational platform." next="/projects/yacopini" >
          <div className="col col-12">
            ...
          </div>
          </ProjectStructure>
        </Desktop>
        <Mobile>
          <ProjectStructure ref={(section) => { this.projectSection = section; }} title="Psycho- pharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. Web / UI design. Educational platform." next="/projects/yacopini" >
          <div className="col col-12">
            ...
          </div>
          </ProjectStructure>
        </Mobile>

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
