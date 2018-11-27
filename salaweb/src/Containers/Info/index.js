import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';
import Responsive from 'react-responsive';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import Lottie from 'react-lottie';
import * as animationData from 'app/resources/js/deep_loading.json'


import './Info.css';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
  componentDidMount() {
     document.title = "About me - Ezequiel Salatino";
     var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
     animateScrollTo(topbar, {speed:1,  minDuration: 1200});
  }

  render() {

    const Mobile = props => <Responsive {...props} maxWidth={1279} />;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (

      <div className="info">
        <div className="anim-container">
          <Lottie  options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
         />
       </div>
        <TopBar className="  ">
          <GlobalNav active="info" />
        </TopBar>
        <div className="container ">
          <div className="col col-12  ">
              <Mobile>
                <br/><br/><br/>
              </Mobile>
            <h1 >I’m a designer interested in user interfaces, design systems, maps & data visualizations.</h1>
          </div>
        </div>

        <div className="container">

            <div className="col col-9 col-m-12">

        
              <p className="p-b">
                I studied graphic design in Argentina and start designing and building websites in 2003. I have <a href="https://www.linkedin.com/in/ezequielsalatino/" target="_blank" rel="noopener noreferrer" >experience</a> as freelancer but also in a few design and develop companies. </p>
              <p className="p-b"> Today I work as a freelance designer, mainly focused in UI, but also working as a product, UX and brand designer. Currently I'm also part of <a href="https://pannonica.design" target="_blank" rel="noopener noreferrer">pannonica.design</a>  as a design partner.
              </p>
              <p className="p-b"> Check out my <Link to="/projects/"  >work</Link> or my <a href="https://www.behance.net/EzequielSalatino" target="_blank" rel="noopener noreferrer">behance</a> page. If you have a cool project, feel free to  <a href="mailto:ezequiel.salatino@gmail.com">write me an email</a>. I will be happy to help.
              </p>

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
)(Info);
