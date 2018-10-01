import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import scrollToComponent from 'react-scroll-to-component';
import Image from 'app/Components/Image/index.js';

import './Cooking.css';

class Cooking extends React.Component {
  componentDidMount() {
    document.title = "Cooking App Ideas - Ezequiel Salatino";
    scrollToComponent(this.projectSection, { offset: 0, align: 'top', duration: 1, ease:'inOutCirc'});
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
