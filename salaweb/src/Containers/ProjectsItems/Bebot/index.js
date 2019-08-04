import React from 'react';
import { connect } from 'react-redux';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';

import './Bebot.css';

class Bebot extends React.Component {
  componentDidMount() {
    document.title = "BeBot - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

}

  render() {

    return (
      <div className="bebot">
        <TopBar>
          <GlobalNav active="projects" inProject />
          <ProjectsNav active="bebot"/>
        </TopBar>
        <ProjectStructure title="BeBot" color="#0082E5" description="Some maps created for a couple of websites." next="/projects/subirats" >
        <div className="col col-6 col-m-12">
          asd
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
)(Bebot);
