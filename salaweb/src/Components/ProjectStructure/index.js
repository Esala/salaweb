import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './ProjectStructure.css';

class ProjectStructure extends React.Component {
  componentDidMount() {}

  render() {
    const { color, title, description, light, next } = this.props;

    let className = 'project-structure '+
      (light ? ' project-structure-light' : '');

    //PROJECT background Color
    if (color) {
      var projectColor = {
          backgroundColor:  color
      };
    }

    return (
      <div className={className} style={projectColor}>
        <div className="project-structure__info">
          <div className="container">
            <div className="col col-8">
              <h1>{title}</h1>
            </div>
            <div className="col col-4 project-structure__info__description">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="container project-structure__content">
          <div className="col col-12">
            {this.props.children}
          </div>
        </div>
        <div className="container">
          <div className="col col-12">
            <div className="project-structure__next">
              <Link to={next}>Next project</Link>
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
)(ProjectStructure);