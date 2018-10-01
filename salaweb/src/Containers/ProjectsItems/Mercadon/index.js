import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';
import scrollToComponent from 'react-scroll-to-component';


import './Mercadon.css';

class Mercadon extends React.Component {
  componentDidMount() {
    document.title = "El Mercadón - Ezequiel Salatino";
    scrollToComponent(this.projectSection, { offset: 0, align: 'top', duration: 1500, ease:'inOutCirc'});
  }

  render() {

    return (
      <div className="mercadon">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="mercadon"/>
        </TopBar>
        <ProjectStructure ref={(section) => { this.projectSection = section; }} title="El Mercadón" color="#1C42A1" description="Nov 2017. Branding. Product design. Web / UI design. E-commerce." light next="/projects/cooking-app" >
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
)(Mercadon);
