import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 import TopBar from 'app/Components/TopBar/index.js';
 import GlobalNav from 'app/Components/GlobalNav/index.js';


import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {document.title = "Currently Working - Ezequiel Salatino";}

  render() {
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
    return (
      <div className="projects">
        <TopBar>
          <GlobalNav active="projects" />
        </TopBar>
        <div className="container">
          <div className="col col-12">
            <div className="projects__project">
              <div className="projects__project__card" style={psychopharmacologyColor}>
                <Link to="/projects/psychopharmacology-institute"></Link>
                <h2>Psychopharmacology<br/>Institute</h2>
                <p className="p-s">As Product Designer</p>
              </div>
            </div>
            <div className="projects__project">
              <div className="projects__project__card projects__project__card-light"  style={yacopiniColor}>
                <Link to="/projects/yacopini"></Link>
                <h2>Yacopini</h2>
                <p className="p-s">As Web/UI/UX Designer</p>
              </div>


            </div>
            <div className="projects__project">
              <div className="projects__project__card projects__project__card-light" style={mercadonColor}>
                <Link to="/projects/el-mercadon"></Link>
                <h2>El Mercadón</h2>
                <p className="p-s">As Web/UI/UX Designer</p>
              </div>
            </div>
            <div className="projects__project">
              <div className="projects__project__card" style={cookingColor}>
                <Link to="/projects/cooking-app"></Link>
                <h2>Cooking App Ideas</h2>
                <p className="p-s">As Web/UI/UX Designer</p>
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
