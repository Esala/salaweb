import React from 'react';
import { connect } from 'react-redux';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';

import './Maps.css';

class Maps extends React.Component {
  componentDidMount() {
    document.title = "Some Maps - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

}

  render() {

    return (
      <div className="maps">
        <TopBar>
          <GlobalNav active="projects" inProject />
          <ProjectsNav active="maps"/>
        </TopBar>
        <ProjectStructure title="Some Maps" color="#F8ECF0" description="Some maps created for a couple of websites." next="/projects/psychopharmacology-institute" >
        <div className="col col-6 col-m-12">
          <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/sandia.png'} />
        </div>
        <div className="col col-6 col-m-12">
          <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/limon.png'} />
        </div>
        <div className="col col-6 col-m-12">
          <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/palta.png'} />
        </div>
        <div className="col col-6 col-m-12">
          <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/tomate.png'} />
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
)(Maps);
