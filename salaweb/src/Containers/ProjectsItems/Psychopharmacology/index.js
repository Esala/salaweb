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
          <ProjectStructure title="Psychopharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. Web / UI design. Educational platform." next="/projects/yacopini" >

          <div className="col col-12 col-center">
            <Image device tablet url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/audio_tablet.png'} />
          </div>
          <div className="col col-6  col-center col-m-12">
            <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/lecture_mobile.png'} />
          </div>
          <div className="col col-6  col-center col-m-12">
              <p className="p-b">To work our way towards a shared language once again, we must first learn how to discover patterns which are deep, and capable of generating life.</p>
            <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/account_mobile.png'} />
          </div>

          </ProjectStructure>
        </Desktop>
        <Mobile>
          <ProjectStructure  title="Psycho- pharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. Web / UI design. Educational platform." next="/projects/yacopini" >
          <div className="col col-12  col-center ">
            <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/lecture_mobile.png'} />
          </div>
          <div className="col col-12 col-center ">
            <Image device mobile url={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/account_mobile.png'} />
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
