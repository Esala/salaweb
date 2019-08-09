import React from 'react';
import { connect } from 'react-redux';
import animateScrollTo from 'animated-scroll-to';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';


import './Yacopini.css';

class Yacopini extends React.Component {
  componentDidMount() {
    document.title = "Yacopini - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});
}

  render() {

    return (
      <div className="yacopini">
        <TopBar>
          <GlobalNav active="projects" inProject />
          <ProjectsNav active="yacopini"/>
        </TopBar>
        <ProjectStructure  title="Yacopini" color="#FE5620" description="Apr 2015. Web / UI design. Volkswagen, Chevrolet & Nissan authorized car dealer." light next="/projects/bebot" >
        <div className="col col-12 col-m-12">
          <Image light device desktop height="800" url={process.env.PUBLIC_URL + '/resources/img/yacopini/website_desktop_1.jpg'} />
        </div>
        <div className="col col-12 col-m-12 col-center">
          <p className="p-b p-center">
            Yacopini is a Volkswagen, Chevrolet and Nissan official car dealer. I worked designing public websites and internal productivity applications for their managers and employees. I was also in charge of creating a design system that included from identity patterns to UI Components.
          </p>
          <br/><br/>
        </div>
        <div className="col col-12 col-m-12">
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/operarios_tv.jpg'} />
        </div>
        <div className="col col-12 col-center col-m-12">
          <h4 className="headline headline-center">Maintenance Workers Web Application</h4>
          <p className="p p-center">
            This app allows the manager to visualize the status of the workers in real-time from a TV or his mobile phone. Each worker has an iPad to set the status
of their work and to report problems.
          </p>
          <br/>
        </div>
        <div className="col col-4 col-center col-m-12">
          <Image light mobile device height="586" url={process.env.PUBLIC_URL + '/resources/img/yacopini/operarios_mobile_1.jpg'} />
        </div>
        <div className="col col-4 col-center col-m-12">
          <Image light mobile device height="586" url={process.env.PUBLIC_URL + '/resources/img/yacopini/operarios_mobile_2.jpg'} />
        </div>
        <div className="col col-4 col-center col-m-12">
          <Image light mobile device height="586" url={process.env.PUBLIC_URL + '/resources/img/yacopini/operarios_mobile_3.jpg'} />
        </div>



        <div className="col col-6 col-m-12 col-center">
          <Image light device tablet height="1024" url={process.env.PUBLIC_URL + '/resources/img/yacopini/operarios_tablet_1.jpg'} />
        </div>
        <div className="col col-6 col-m-12 col-center">
          <Image light device tablet height="1024" url={process.env.PUBLIC_URL + '/resources/img/yacopini/operarios_tablet_2.jpg'} />
        </div>

        <div className="col col-12 col-center col-m-12">
          <h4 className="headline headline-center">Maintenance Shifts Web Application</h4>
          <p className="p p-center">
          This app allows the car owners to schedule a shift for the mandatory maintenance of their new vehicles.
          </p>
          <br/>
        </div>

        <div className="col col-4 col-m-12 ">

          <Image light device mobile height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/shifts_mobile_1.jpg'} />
        </div>
        <div className="col col-4 col-m-12 ">

          <Image light device mobile height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/shifts_mobile_3.jpg'} />
        </div>

        <div className="col col-4 col-m-12 ">

          <Image light device mobile height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/shifts_mobile_4.jpg'} />
        </div>

        <div className="col col-12 col-m-12">
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/shifts_desktop_1.jpg'} />
        </div>
        <div className="col col-12 col-m-12">
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/shifts_desktop_3.jpg'} />
        </div>


        <div className="col col-12 col-center col-m-12">
          <h4 className="headline headline-center">Marketing Landing Creation System</h4>
          <p className="p p-center">
          This system allows the car dealer marketing team to create, in a few minutes, custom landing pages for special promotions & campaigns. The landings are responsive and consistent with the shop identity.
          </p>
          <br/>
        </div>

        <div className="col col-12 col-m-12">
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/landings_desktop_4.jpg'} />
        </div>
        <div className="col col-12 col-m-12">
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/landings_desktop_2.jpg'} />
        </div>
        <div className="col col-12 col-m-12">
          <Image light device desktop height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/landings_desktop_3.jpg'} />
        </div>

        <div className="col col-4 col-m-12 ">

          <Image light device mobile height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/landings_mobile_1.jpg'} />
        </div>
        <div className="col col-4 col-m-12 ">

          <Image light device mobile height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/landings_mobile_3.jpg'} />
        </div>

        <div className="col col-4 col-m-12 ">

          <Image light device mobile height="633" url={process.env.PUBLIC_URL + '/resources/img/yacopini/landings_mobile_2.jpg'} />
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
)(Yacopini);
