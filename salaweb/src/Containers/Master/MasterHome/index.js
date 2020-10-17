import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import animateScrollTo from 'animated-scroll-to';

import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import BlogPostItem from 'app/Components/Blog/BlogPostItem/index.js';

import './MasterHome.css';

class MasterHome extends React.Component {
  constructor() {
       super();

       this.state = {
           statusClass: 'entering'
       };
   }

  componentDidMount() {
    document.title = "MADD. Ezequiel Salatino. ";
    var topbar = 0;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    return (
      <div className="master ">


      <div className="master-home__list">
        <BlogPostItem link="project_first_presentation" domain="/madd/statistics/" image={process.env.PUBLIC_URL + '/resources/img/master/statistics/cover.jpg'} title={["How ", <span key="1" className="blog-highlight">MADD‎</span>, " is different for each designer?"]}  date="October. 2019" category="" tags={["Statistics"]}>

        </BlogPostItem>


      </div>
      <div className=" master-home__footer">
        <div className="container">
          <div className="col col-12">
            <h3>Let’s talk!</h3>
            <Desktop>
              <p className="p">
                You can write me at:{' '}
                <a href="mailto:ezequiel.salatino@gmail.com" className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>
                <br/>




              </p>
            </Desktop>
            <Mobile>
              <p className="p">
                You can write me at:{' '}
                <a href="mailto:ezequiel.salatino@gmail.com" rel="noopener noreferrer" target="_blank"  className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>
                <br/>

              </p>
            </Mobile>
            <MobileXS>
              <p className="p p-s">
                You can write me at:{' '}
                <a href="mailto:ezequiel.salatino@gmail.com" rel="noopener noreferrer" target="_blank"  className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>


              </p>
            </MobileXS>
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
)(MasterHome);
