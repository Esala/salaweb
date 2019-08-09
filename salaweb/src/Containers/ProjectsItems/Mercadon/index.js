import React from 'react';
import { connect } from 'react-redux';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';





import './Mercadon.css';

class Mercadon extends React.Component {
  componentDidMount() {
    document.title = "El Mercadón - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});
  }

  render() {

    return (
      <div className="mercadon">
        <TopBar>
          <GlobalNav active="projects" inProject/>
          <ProjectsNav active="mercadon"/>
        </TopBar>
        <ProjectStructure title="El Mercadón" color="#1E46AF" description="Nov 2017. Branding. Web / UI / UX design. E-commerce." light next="/projects/subirats" full >
          <div className="container">
            <div className="col col-12 col-m-12">
              <Image nopadding light height="1000" url={process.env.PUBLIC_URL + '/resources/img/mercadon/sandia.png'} />
            </div>
            <div className="col col-12 col-center">
              <p className="p-b p-center">
                El Mercadón is a e-commerce platform for local fresh fruits and vegetables with free delivery. I work in branding, web, UX and UI Design.
              </p>
              <br/>
              <br/>
            </div>
          </div>
          <Image  url={process.env.PUBLIC_URL + '/resources/img/mercadon/brand-3.png'} full />
          <div className="container">

            <div className="col col-12 col-m-12">
              <Image light height="634" device desktop url={process.env.PUBLIC_URL + '/resources/img/mercadon/home_desktop.png'} />
            </div>

      

            <div className="col col-12 col-m-12">
              <Image light height="634" url={process.env.PUBLIC_URL + '/resources/img/mercadon/ui.png'} />
            </div>

            <div className="col col-6 col-center col-m-12">
              <Image light height="703" url={process.env.PUBLIC_URL + '/resources/img/mercadon/bolsas.png'} />
            </div>
            <div className="col col-6 col-center col-m-12">
              <Image light height="703" url={process.env.PUBLIC_URL + '/resources/img/mercadon/bolsas_dorso.png'} />
            </div>
          </div>

          <div className="container">



            <div className="col col-4 col-m-6">
              <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/limon.png'} />
            </div>
            <div className="col col-4 col-m-6">
              <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/tomate.png'} />
            </div>
            <div className="col col-4 col-m-12">
              <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/ciruela.png'} />
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
)(Mercadon);
