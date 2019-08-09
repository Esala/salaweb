import React from 'react';
import { connect } from 'react-redux';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';

import './Amg.css';

class Amg extends React.Component {
  componentDidMount() {
    document.title = "AMG - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});
}

  render() {

    return (
      <div className="amg">
        <TopBar>
          <GlobalNav active="projects" inProject />
          <ProjectsNav active="amg"/>
        </TopBar>
        <ProjectStructure title="AMG.la " color="#510B36" description="Nov 2018. UI design. iOS Application."  light next="/projects/psychopharmacology-institute" >
          <div className="col col-12">
            <div className="col col-6 col-center col-m-12">
              <Image height="703" device mobile url={process.env.PUBLIC_URL + '/resources/img/amg/cook_mobile.png'} />
            </div>
            <div className="col col-6 col-center col-m-12">
              <Image nopadding url={process.env.PUBLIC_URL + '/resources/img/amg/acelga.png'} />
              <p className="p-b">
                Ilustrations by<br/> <a href="asd">Elías Rodriguez</a>
              </p>
            </div>

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
)(Amg);
