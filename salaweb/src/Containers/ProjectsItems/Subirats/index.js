import React from 'react';
import { connect } from 'react-redux';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';

import './Subirats.css';

class Subirats extends React.Component {
  componentDidMount() {
    document.title = "Ramón Subirats - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

}

  render() {

    return (
      <div className="subirats">
        <TopBar>
          <GlobalNav active="projects" inProject />
          <ProjectsNav active="subirats"/>
        </TopBar>
        <ProjectStructure title="Ramón Subirats" color="#EDE5E2" description="Nov 2015. Brand. Web Design." next="/projects/amg" full >
        <Image url={process.env.PUBLIC_URL + '/resources/img/subirats/intro-brand.jpg'} full />
        <div className="container">
          <div className="col col-12 col-m-12">
            <p className="p-b">
              Ramón Subirats was an artist from Barcelona who traveled through Latin America portraying natives with his charcoal pencils. I designed the brand, the website and a map to show
  his incredible journey.
            </p>
            <br/><br/><br/>
          </div>
        </div>
        <Image url={process.env.PUBLIC_URL + '/resources/img/subirats/map.jpg'} full  nopadding/>
        <Image url={process.env.PUBLIC_URL + '/resources/img/subirats/web-1.jpg'} full  nopadding />

        {/* <Image url={process.env.PUBLIC_URL + '/resources/img/subirats/web-2.jpg'} full maxed nopadding /> */}
        {/* <Image url={process.env.PUBLIC_URL + '/resources/img/subirats/web-3.jpg'} full maxed right nopadding/> */}
        <div className="container">
          <div className="col col-12 col-m-12 col-center">
            <br/><br/><br/><br/>
            <p className="p-b p-center">
              For more images check the <a href="https://www.behance.net/gallery/30901359/Ramon-Subirats" rel="noopener noreferrer" target="_blank"> behance post</a>.
            </p>
            <br/><br/>
          </div>
        </div>
        <Image url={process.env.PUBLIC_URL + '/resources/img/subirats/brand-footer.jpg'} full nopadding />


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
)(Subirats);
