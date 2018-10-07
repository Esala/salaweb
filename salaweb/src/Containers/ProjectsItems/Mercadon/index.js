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
          <GlobalNav active="projects" />
          <ProjectsNav active="mercadon"/>
        </TopBar>
        <ProjectStructure title="El Mercadón" color="#1C42A1" description="Nov 2017. Branding. Product design. Web / UI design. E-commerce." light next="/projects/cooking-app" >
          <div className="col col-12 col-m-12">
            <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/sandia.png'} />
          </div>
          <div className="col col-12 col-m-12">
            <Image light height="634" device desktop url={process.env.PUBLIC_URL + '/resources/img/mercadon/login_desktop.png'} />

          </div>
          <div className="col col-6 col-m-12 col-center">
            <Image light height="703" device mobile url={process.env.PUBLIC_URL + '/resources/img/mercadon/home_mobile.png'} />

          </div>
          <div className="col col-6 col-m-12">
            <p className="p-b">
              The structure of life I have described in buildings is deeply and inextricably connected with the human person, and with the innermost nature of human feeling.
            </p>
          </div>
          <div className="col col-6 col-m-12">
            <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/limon.png'} />
          </div>
          <div className="col col-6 col-m-12">
            <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/tomate.png'} />
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
