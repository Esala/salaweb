import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';



import './Psychopharmacology.css';

class Psychopharmacology extends React.Component {
  componentDidMount() {
    document.title = "Psychopharmacology Institute - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});
  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;
    return (
      <div className="psychopharmacology">
        <TopBar>
          <GlobalNav active="projects" inProject />
          <ProjectsNav active="psychopharmacology"/>
        </TopBar>
        <Desktop>
          <ProjectStructure full title="Psychopharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. UX / UI. Web design. Educational platform." next="/projects/yacopini" >
            <div className="container">
              <div className="col col-12 col-center">
                <Image device desktop url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_website_1.jpg'} />
              </div>
              <div className="col col-6  col-center col-m-12">
                <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_mobile_1.jpg'} />
                <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_mobile_3.jpg'} />

              </div>
              <div className="col col-6  col-center col-m-12">
                  <p className="p-b">The Psychopharmacology Institute is an educational platform for psychiatrist from the USA and the rest of the world.</p>
                <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_mobile_2.jpg'} />
              </div>
              <div className="col col-12 col-center">
                  <p className="p-b p-center">I'm currently acting as a product designer, from understanding the business and product strategy to user research, UX / UX and Web design.</p>
              </div>
            </div>


            <Image url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_ui.png'} full  />
            <div className="container">
              <div className="col col-12 col-center">
                <p className="p-b p-center">
                  Check the website:<br/><a href="https://psychopharmacologyinstitute.com" target="_blank">psychopharmacologyinstitute.com</a>
                </p>
              </div>
            </div>

          </ProjectStructure>
        </Desktop>
        <Mobile>
          <ProjectStructure full title="Psycho- pharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. UX / UI. Web design. Educational platform." next="/projects/yacopini" >
            <div className="container">
              <div className="col col-12 col-center">
                <Image device desktop url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_website_1.jpg'} />
              </div>
              <div className="col col-6  col-center col-m-12">
                <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_mobile_1.jpg'} />
                <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_mobile_3.jpg'} />

              </div>
              <div className="col col-6  col-center col-m-12">

                <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_mobile_2.jpg'} />
              </div>
              <div className="col col-12 col-center">
                <p className="p-b">The Psychopharmacology Institute is an educational platform for psychiatrist from the USA and the rest of the world. I'm currently acting as a product designer, from understanding the business and product strategy to user research, UX / UX and Web design.</p>

              </div>
            </div>


            <Image url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/pi_ui.png'} full  />
            <div className="container">
              <div className="col col-12 col-center">
                <p className="p-b p-center">
                  <a href="https://psychopharmacologyinstitute.com" target="_blank">Check the website</a>
                </p>
              </div>
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
