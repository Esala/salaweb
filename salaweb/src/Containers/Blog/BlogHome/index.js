import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import animateScrollTo from 'animated-scroll-to';
import { Link } from 'react-router-dom';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import BlogPostItem from 'app/Components/Blog/BlogPostItem/index.js';

import './BlogHome.css';

class BlogHome extends React.Component {
  constructor() {
       super();

       this.state = {
           statusClass: 'entering'
       };
   }

  componentDidMount() {
    document.title = "Blog. Ezequiel Salatino. ";
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    return (
      <div className="blog-home ">
      <TopBar>
        <GlobalNav active="blog" />
      </TopBar>
      <BlogPostItem primary link="blog-post"  title={["Every place is given its character by ", <span key="1" className="blog-highlight">certain patterns‎</span>]} date="Sep 20. 2019" category="Personal Project" tags={["Art", "Arduino", "Technology", "UI"]} image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage.jpg'}/>
      <div className="blog-home__list">
        <BlogPostItem link="blog-post" image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage2.jpg'} title="Every place is given its character by certain patterns‎"  date="Sep 20. 2019" category="Personal Project" tags={["Art", "Arduino", "Technology", "UI"]}>
          <p>On the geometric level, we see certain physical elements repeated endlessly, combined in an almost endless variety of combinations.</p>
          <p>It is puzzling to realize that the elements, which seem like elementary building blocks, keep varying, and are different every time that they occur. On the geometric level, we see certain physical elements repeated endlessly, combined in an almost endless variety of combinations. It is puzzling to realize that the elements, which seem like elementary building blocks, keep varying, and are different every time that they occur.</p>
        </BlogPostItem>

        <BlogPostItem link="blog-post-2" image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage4.jpg'} title={["People ", <span key="1" className="blog-highlight">don’t need art‎</span>, " for them, film is just something to do"]}  date="Sep 20. 2019" category="Personal Project" tags={["Art", "Arduino", "Technology", "UI"]}>
          <p>On the geometric level, we see certain physical elements repeated endlessly, combined in an almost endless variety of combinations.</p>

        </BlogPostItem>
        <BlogPostItem link="blog-post" image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage3.jpg'} title="Why to write a blog"  date="Sep 20. 2019" category="Personal Project" tags={["Art", "Arduino", "Technology", "UI"]}>
          <p>On the geometric level, we see certain physical elements repeated endlessly, combined in an almost endless variety of combinations.</p>

        </BlogPostItem>
      </div>
      <div className=" blog-home__footer">
        <div className="container">
          <div className="col col-12">
            <h3>If you have a cool project, let’s talk!</h3>
            <Desktop>
              <p className="p">
                You can write me at:{' '}
                <a href="mailto:ezequiel.salatino@gmail.com" className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>
                <br/>
              <a href="linkedin.com/in/ezequielsalatino/" target="_blank" className="home__email-link">
                linkedin.com/in/ezequielsalatino/
              </a>



              </p>
            </Desktop>
            <Mobile>
              <p className="p">
                You can write me at:{' '}
                <a href="mailto:ezequiel.salatino@gmail.com" rel="noopener noreferrer" target="_blank"  className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>
                <br/>
              <a href="http://linkedin.com/in/ezequielsalatino/" rel="noopener noreferrer" target="_blank" className="home__email-link">
                linkedin.com/in/ezequielsalatino/
              </a>
              </p>
            </Mobile>
            <MobileXS>
              <p className="p p-s">
                You can write me at:{' '}
                <a href="mailto:ezequiel.salatino@gmail.com" rel="noopener noreferrer" target="_blank"  className="home__email-link">
                  ezequiel.salatino@gmail.com
                </a>

              <a href="http://linkedin.com/in/ezequielsalatino/" rel="noopener noreferrer" target="_blank" className="home__email-link">
                linkedin.com/in/ezequielsalatino/
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
)(BlogHome);
