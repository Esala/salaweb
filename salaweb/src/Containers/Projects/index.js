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
        <TopBar className="page-component  1">
          <GlobalNav active="projects" />
        </TopBar>

            <div className="projects__project">
              <div className="projects__project__card page-component  2" style={psychopharmacologyColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/psychopharmacology-institute"></Link>
                    <Desktop>
                      <h1>Psychopharmacology<br/>Institute</h1>
                    </Desktop>
                    <Mobile>
                      <h1>Psychophar- macology Institute</h1>
                    </Mobile>

                    <p className="p-b">Product Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__project">
              <div className="projects__project__card projects__project__card-light page-component  3"  style={yacopiniColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/yacopini"></Link>
                    <h1>Yacopini</h1>
                    <p className="p-b">Web/UI Design</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="projects__project">

              <div className="projects__project__card projects__project__card-light page-component  4" style={mercadonColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/el-mercadon"></Link>
                    <h1>El Mercadón</h1>
                    <p className="p-b">Web/UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects__project">
              <div className="projects__project__card page-component  5" style={cookingColor}>
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
              <div className="projects__project__card page-component  6" style={mapsColor}>
                <div className="container">
                  <div className="col col-12">
                    <Link to="/projects/some-maps"></Link>
                    <h1>Some Maps</h1>
                    <p className="p-b">UI Design</p>
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
