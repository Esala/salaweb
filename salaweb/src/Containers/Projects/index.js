import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Responsive from 'react-responsive';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';


import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {document.title = "Currently Working - Ezequiel Salatino";}

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;
    const psychopharmacologyColor =  {
      backgroundColor: '#7FDBE3'
    };
    const yacopiniColor =  {
      backgroundColor: '#FE5620'
    };
    const mercadonColor =  {
      backgroundColor: '#1C42A1'
    };
    const cookingColor =  {
      backgroundColor: '#FFF8F0'
    };
    const mapsColor =  {
      backgroundColor: '#F8ECF0'
    };
    return (
      <div className="projects">
        <TopBar>
          <GlobalNav active="projects" />
        </TopBar>

            <div className="projects__project">
              <div className="projects__project__card" style={psychopharmacologyColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/psychopharmacology-institute"></Link>
                    <Desktop>
                      <h2>Psychopharmacology<br/>Institute</h2>
                    </Desktop>
                    <Mobile>
                      <h2>Psychopharma- cology Institute</h2>
                    </Mobile>

                    <p className="p-s">Product Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__project">
              <div className="projects__project__card projects__project__card-light"  style={yacopiniColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/yacopini"></Link>
                    <h2>Yacopini</h2>
                    <p className="p-s">Web/UI Design</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="projects__project">

              <div className="projects__project__card projects__project__card-light" style={mercadonColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/el-mercadon"></Link>
                    <h2>El Mercadón</h2>
                    <p className="p-s">Web/UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__project">
              <div className="projects__project__card" style={cookingColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/cooking-app"></Link>
                    <h2>Cooking App Ideas</h2>
                    <p className="p-s">UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="projects__project">
              <div className="projects__project__card" style={mapsColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/some-maps"></Link>
                    <h2>Some Maps</h2>
                    <p className="p-s">UI Design</p>
                  </div>
                </div>
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
