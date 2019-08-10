import React from 'react';
import { connect } from 'react-redux';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';

import './Bebot.css';

class Bebot extends React.Component {
  componentDidMount() {
    document.title = "BeBot - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

}

  render() {

    return (
      <div className="bebot">
        <TopBar>
          <GlobalNav active="projects" inProject />
          <ProjectsNav active="bebot"/>
        </TopBar>
        <ProjectStructure title="BeBot." light color="#0082E5" description="Feb 2019. Brand / Web Design. Conversational design agency." next="/projects/el-mercadon" >
        <div className="col col-4 col-center col-m-12">
          <Image light mobile device height="768" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_website_mobile_1.jpg'} />
        </div>
        <div className="col col-4 col-center col-m-12">
          <Image light mobile device height="768" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_website_mobile_2.jpg'} />
        </div>
        <div className="col col-4 col-center col-m-12">
          <Image light mobile device height="768" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_website_mobile_3.jpg'} />
        </div>
        <div className="col col-12 col-center">
          <p className="p-b p-center">
            Chatbots without personality are just machines! BeBot is a conversational design agency focus in designing chatbots that are unique and unrepeatable. As a co-founder and design manager, I'm working in the visual identity, the website and business presentations.
          </p>

          <br/>
          <br/>
        </div>
        <div className="col col-12 col-center col-m-12">
          <p className="p-s p-center">
            Mobile & Desktop Website.
          </p>
          <Image light device desktop height="900" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_website_desktop_1.jpg'} />
        </div>
        <div className="col col-12 col-center col-m-12">
          <Image light device desktop height="900" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_website_desktop_2.jpg'} />
        </div>



        <div className="col col-12 col-center col-m-12">
          <p className="p-s p-center">
            Business Presentation Screens.
          </p>
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_presentations-4.jpg'} />
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_presentations_5.jpg'} />
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_presentations-3.jpg'} />

        </div>

        <div className="col col-12 col-center">

          <p className="p-b p-center">
            Check the website: <a href="https://bebot.design" target="_blank">bebot.design</a>
          </p>

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
)(Bebot);
