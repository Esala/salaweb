import React from 'react';
import { connect } from 'react-redux';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';


import './Yacopini.css';

class Yacopini extends React.Component {
  componentDidMount() {
    document.title = "Yacopini - Ezequiel Salatino";

}

  render() {

    return (
      <div className="yacopini">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="yacopini"/>
        </TopBar>
        <ProjectStructure  title="Yacopini" color="#FE5620" description="Apr 2015. Web / UI design. Volkswagen, Chevrolet & Nissan authorized car dealer." light next="/projects/el-mercadon" >
        <div className="col col-6 col-m-12">
          <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/sandia.png'} />
        </div>
        <div className="col col-6 col-m-12">
          <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/limon.png'} />
        </div>
        <div className="col col-6 col-m-12">
          <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/palta.png'} />
        </div>
        <div className="col col-6 col-m-12">
          <Image light url={process.env.PUBLIC_URL + '/resources/img/mercadon/tomate.png'} />
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
