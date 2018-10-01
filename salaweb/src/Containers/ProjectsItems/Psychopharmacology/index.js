import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import ProjectStructure from 'app/Components/ProjectStructure/index.js';
import Image from 'app/Components/Image/index.js';



import './Psychopharmacology.css';

class Psychopharmacology extends React.Component {
  componentDidMount() {
    document.title = "Psychopharmacology Institute - Ezequiel Salatino";

  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;
    return (
      <div className="psychopharmacology">
        <TopBar>
          <GlobalNav active="projects" />
          <ProjectsNav active="psychopharmacology"/>
        </TopBar>
        <Desktop>
          <ProjectStructure title="Psychopharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. Web / UI design. Educational platform." next="/projects/yacopini" >
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/sandia.png'} />
          </div>
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/limon.png'} />
          </div>
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/palta.png'} />
          </div>
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/tomate.png'} />
          </div>
          </ProjectStructure>
        </Desktop>
        <Mobile>
          <ProjectStructure  title="Psycho- pharma- cology Institute" color="#7FDBE3" description="Jun 2018. Product design. Web / UI design. Educational platform." next="/projects/yacopini" >
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/sandia.png'} />
          </div>
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/limon.png'} />
          </div>
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/palta.png'} />
          </div>
          <div className="col col-6 col-m-12">
            <Image url={process.env.PUBLIC_URL + '/resources/img/mercadon/tomate.png'} />
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
