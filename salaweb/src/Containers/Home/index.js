import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import animateScrollTo from 'animated-scroll-to';
import { Link } from 'react-router-dom';
import Avatar from 'app/Components/Avatar/index.js'

import './Home.css';

class Home extends React.Component {
  constructor() {
       super();

       this.state = {
           statusClass: 'entering'
       };
   }

  componentDidMount() {
    document.title = "Hi, I'm Ezequiel, freelance designer.";
    var homeElement = 0 ;
    document.documentElement.className='';
    animateScrollTo(homeElement, {speed:1,  minDuration: 1200});
    this.setState({ statusClass: 'scrolled' });

  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    return (
      <div className={"home " + this.state.statusClass}>
        <div className="container">
          <div className="col col-12">
            <Desktop>
              <Avatar />
              <h1>Hello! I’m Ezequiel Salatino. <br/> Freelance designer interested in interfaces, design systems, maps & data visualizations. <span className="highlight">Currently living in Barcelona.</span>

              </h1>
            </Desktop>

            <Mobile>
              <Avatar />
              <h1 >Hello! I’m Ezequiel Salatino. Freelance designer interested in interfaces, design systems, maps & data visualizations. <span className="highlight">Currently living in Barcelona.</span> </h1>
            </Mobile>
            <MobileXS>
              <Avatar />
              <h1 >Hello! I’m Ezequiel Salatino. Freelance designer interested in interfaces, design systems, maps & data visualizations. <span className="highlight">Currently living in Barcelona.</span> </h1>
            </MobileXS>

            <br/>
            <p className="p-b ">

              <Link to="/about/">
                About
              </Link>
              <span className="force-space"> { "  /  " }</span>
              <Link to="/projects/" >
                Projects
              </Link>

          {/* <span className="force-space"> { "  /  " }</span>
                <Link to="/blog/" >
                  Blog
                </Link>
          */}
                <br/>
              <Desktop>
                <a href="mailto:ezequiel.salatino@gmail.com" className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>
                <br/>
              </Desktop>
              <Mobile>
                <a href="mailto:ezequiel.salatino@gmail.com" className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>
                <br/>
              </Mobile>

              <Desktop>
                <a href="http://linkedin.com/in/ezequielsalatino/" target="_blank" rel="noopener noreferrer" className="home__email-link">
                  linkedin.com/in/ezequielsalatino/
                </a>
              </Desktop>
              <Mobile>
                <a href="http://linkedin.com/in/ezequielsalatino/" target="_blank" rel="noopener noreferrer" className="home__email-link"> linkedin.com/in/ezequielsalatino/  </a>
              </Mobile>
              <MobileXS>
                <a href="mailto:ezequiel.salatino@gmail.com" rel="noopener noreferrer" className="home__email-link">
                  Write me an email
                </a>
                <br/>
              </MobileXS>
              <MobileXS>
                <a href="http://linkedin.com/in/ezequielsalatino/" rel="noopener noreferrer" target="_blank" className="home__email-link">
                  Linkedin profile
                </a>
              </MobileXS>


            </p>
            <br/>
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
)(Home);
