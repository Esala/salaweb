import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';
import Responsive from 'react-responsive';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';


import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {
    document.title = "Work - Ezequiel Salatino";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});
  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    const psychopharmacologyColor =  {
      backgroundColor: '#7FDBE3'
    };
    const yacopiniColor =  {
      backgroundColor: '#FE5620'
    };
    const mercadonColor =  {
      backgroundColor: '#1C42A1'
    };
    const bebotColor =  {
      backgroundColor: '#0082E5'
    };
    const amgColor =  {
      backgroundColor: '#510B36'
    };
    const subiratsColor =  {
      backgroundColor: '#EDE5E2'
    };

    return (
      <div className="projects">
        <TopBar className="   1">
          <GlobalNav active="projects" />
        </TopBar>

          {/* YACOPINI */}
          <div className="projects__project">
            <div className="projects__project__card projects__project__card-light "  style={yacopiniColor}>
              <div className="projects__project__card__image">
                <img src={process.env.PUBLIC_URL + '/resources/img/yacopini/yacopini_cover.png'} alt=""/>
              </div>
              <div className="container">
                <div className="col col-12">
                  <Link to="/projects/yacopini"></Link>
                  <h1>Yacopini</h1>
                  <p className="p-b">UI/UX. Design System. Web design.</p>
                </div>
              </div>
            </div>
          </div>


          {/* BEBOT */}
          <div className="projects__project">
            <div className="projects__project__card  "  style={bebotColor}>
              <div className="projects__project__card__image">
                <img src={process.env.PUBLIC_URL + '/resources/img/bebot/bebot_cover.png'} alt=""/>
              </div>
              <div className="container">
                <div className="col col-12">
                  <Link to="/projects/bebot"></Link>
                  <h1>BeBot.</h1>
                  <p className="p-b">Brand. Web design.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MERCADON */}

          <div className="projects__project">

            <div className="projects__project__card projects__project__card-light  " style={mercadonColor}>
              <div className="projects__project__card__image">
                <img src={process.env.PUBLIC_URL + '/resources/img/mercadon/mercadon_cover.png'} alt=""/>
              </div>
              <div className="container">
                <div className="col col-12">
                  <Link to="/projects/el-mercadon"></Link>
                  <h1>El Mercadón</h1>
                  <p className="p-b">Brand. UI/UX. Web Design.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SUBIRATS */}
          <div className="projects__project">
            <div className="projects__project__card "  style={subiratsColor}>
              <div className="projects__project__card__image">
                <img src={process.env.PUBLIC_URL + '/resources/img/subirats/subirats_cover.png'} alt=""/>
              </div>
              <div className="container">
                <div className="col col-12">
                  <Link to="/projects/subirats"></Link>
                  <h1>Ramón Subirats</h1>
                  <p className="p-b">Brand. Web design.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AMG */}
          <div className="projects__project">
            <div className="projects__project__card projects__project__card-light "  style={amgColor}>
              <div className="projects__project__card__image">
                <img src={process.env.PUBLIC_URL + '/resources/img/amg/amg_cover.png'} alt=""/>
              </div>
              <div className="container">
                <div className="col col-12">
                  <Link to="/projects/amg"></Link>
                  <h1>AMG</h1>
                  <p className="p-b">UI/UX. Web Design.</p>
                </div>
              </div>
            </div>
          </div>




          {/* PI */}
          <div className="projects__project">
            <div className="projects__project__card " style={psychopharmacologyColor}>
              <div className="projects__project__card__image">
                <img src={process.env.PUBLIC_URL + '/resources/img/psychopharmacology/psy_cover.png'} alt=""/>
              </div>
              <div className="container">
                <div className="col col-12">
                  <Link to="/projects/psychopharmacology-institute"></Link>
                  <Desktop>
                    <h1>Psychopharmacology<br/>Institute</h1>
                  </Desktop>
                  <Mobile>
                    <h1>Psychopharm Institute</h1>
                  </Mobile>
                  <MobileXS>
                    <h1>Psychopharm Institute</h1>
                  </MobileXS>

                  <p className="p-b">Product Design. UI/UX. Web Design.</p>
                </div>
              </div>
            </div>
          </div>

            {/* <div className="projects__project">
              <div className="projects__project__card " style={cookingColor}>
                <div className="projects__project__card__image">
                  <img src={process.env.PUBLIC_URL + '/resources/img/cooking/cooking_cover.png'} alt=""/>
                </div>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/cooking-app"></Link>
                    <h1>Cooking App Ideas</h1>
                    <p className="p-b">UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="projects__project">
              <div className="projects__project__card " style={mapsColor}>
                <div className="projects__project__card__image">
                  <img src={process.env.PUBLIC_URL + '/resources/img/maps/maps_cover.png'} alt=""/>
                </div>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/some-maps"></Link>
                    <h1>Some Maps</h1>
                    <p className="p-b">UI Design</p>
                  </div>
                </div>
              </div>
            </div>
            */}
            <div className="container projects__more">
              <div className="col col-12">
                <h3>If you have a cool project, let’s talk!</h3>
                <Desktop>
                  <p className="p">
                    You can write me at:{' '}
                    <a href="mailto:ezequiel.salatino@gmail.com" className="home__email-link">
                      ezequiel.salatino@gmail.com
                    </a>
                    <br/>
                  <a href="linkedin.com/in/ezequielsalatino/" target="_blank" className="home__email-link">
                    linkedin.com/in/ezequielsalatino/
                  </a>
                  </p>
                </Desktop>
                <Mobile>
                  <p className="p">
                    You can write me at:{' '}
                    <a href="mailto:ezequiel.salatino@gmail.com" className="home__email-link">
                      ezequiel.salatino@gmail.com
                    </a>
                    <br/>
                  <a href="linkedin.com/in/ezequielsalatino/" target="_blank" className="home__email-link">
                    linkedin.com/in/ezequielsalatino/
                  </a>
                  </p>
                </Mobile>
                <MobileXS>
                  <p className="p p-s">
                    You can write me at:{' '}
                    <a href="mailto:ezequiel.salatino@gmail.com" className="home__email-link">
                      ezequiel.salatino@gmail.com
                    </a>

                  <a href="linkedin.com/in/ezequielsalatino/" target="_blank" className="home__email-link">
                    linkedin.com/in/ezequielsalatino/
                  </a>
                  </p>
                </MobileXS>
              </div>
            </div>

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
)(Projects);
