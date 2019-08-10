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
        <ProjectStructure title="AMG Latin America" full color="#510B36" description="Nov 2018. UI/UX. Web design."  light next="/projects/psychopharmacology-institute" >
          <div className="container">
            <div className="col col-12 col-center col-m-12">

              <Image height="703" light device desktop url={process.env.PUBLIC_URL + '/resources/img/amg/amg_website_2.jpg'} />
              <p className="p-s p-center">
                Illustration by <a href="https://dribbble.com/ivcoti" target="_blank">Alejandro Ramirez</a>.
              </p>
            </div>

            <div className="col col-12 col-center">
              <p className="p-b p-center">
                AMG is a consulting company founded in 1993 that work with companies in all across Latin America and lead their transformation processes to help them grow.
              </p>
              <br/>
              <br/>
              <br/>
            </div>


          </div>

          <Image url={process.env.PUBLIC_URL + '/resources/img/amg/amg_wheel.jpg'} full />
          <div className="container">
            <div className="col col-12 col-center">
              <p className="p-b p-center">
                I was involved in the design of a web application that allows their clients understand where are the problems inside their organization, and get valuable insights.
              </p>
              <br/>
              <br/>
            </div>
            <div className="col col-12 col-center col-m-12">
              <Image height="703" light device desktop url={process.env.PUBLIC_URL + '/resources/img/amg/amg_website_4.jpg'}  />
              <Image height="703" light device desktop url={process.env.PUBLIC_URL + '/resources/img/amg/amg_website_1.jpg'}  />

              <Image height="703" light device desktop url={process.env.PUBLIC_URL + '/resources/img/amg/amg_website_3.jpg'}  />

            </div>
          </div>
          <Image url={process.env.PUBLIC_URL + '/resources/img/amg/amg_ui.png'} full />
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
