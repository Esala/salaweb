import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';
//import Responsive from 'react-responsive';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
//import Lottie from 'react-lottie';
//import * as animationData from 'app/resources/js/deep_loading.json'


import './Info.css';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
  componentDidMount() {
     document.title = "About me - Ezequiel Salatino";
     document.documentElement.className='';
     var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
     animateScrollTo(topbar, {speed:1,  minDuration: 1200});
  }

  render() {

  //  const Mobile = props => <Responsive {...props} maxWidth={1279} />;
    /*
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }; */

    return (

      <div className="info">
        {/* <div className="anim-container">
          <Lottie  options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
         />
       </div>*/}
        <TopBar className="  ">
          <GlobalNav active="info" />
        </TopBar>
        <div className="container info__content">
          <div className="col col-12  ">

            <h1 >I’m Ezequiel Salatino. Freelance designer. </h1>
          </div>
        </div>

        <div className="container">

            <div className="col col-10 col-t-12 col-m-12">


              <p className="p-b">
                I studied graphic design in Argentina and start designing and building websites in 2003. In 2020 I finished a Master Degree in Data & Design at <a href="https://elisava.net" target="_blank" rel="noopener noreferrer">Elisava (Barcelona)</a>.
                <br className="only-desktop"/>I have <a href="https://www.linkedin.com/in/ezequielsalatino/" target="_blank" rel="noopener noreferrer" >experience</a> as a freelancer but also in a few design and IT companies. </p>
              <p className="p-b"> I mainly work as a UI designer but I'm also working<br className="only-desktop"/> as a product, UX and brand designer. I love creating design systems, and now I'm focused on information design and data visualizations.
              </p>
              <p className="p-b"> I'm part of <a href="https://pannonica.design" target="_blank" rel="noopener noreferrer">pannonica.design</a> as a design partner. Also, I'm a design manager and co-founder of <a href="https://bebot.design" target="_blank" rel="noopener noreferrer">bebot.design</a> <br className="only-desktop"/> a conversational design agency.
              </p>
              <p className="p-b">Check out my <Link to="/projects/"  >work</Link>. If you have a cool project, feel free to  <a href="mailto:ezequiel.salatino@gmail.com" >write me an email</a>. I will be happy to help.
              </p>
              <p className="p-b">
                <a href="http://bit.ly/32828v2" target="_blank" rel="noopener noreferrer" >Resume (PDF)</a>
                <br/>
                <a href="http://bit.ly/2XqBiiN" target="_blank" rel="noopener noreferrer" >Portfolio (PDF)</a>
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
