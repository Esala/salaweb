import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import animateScrollTo from 'animated-scroll-to';
import { Link } from 'react-router-dom';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import BlogPostHeroImage from 'app/Components/Blog/BlogPostHeroImage/index.js';
import BlogPostImage from 'app/Components/Blog/BlogPostImage/index.js';


import '../../BlogPost.css';
import './FinalPresentation.css';

class BlogPost extends React.Component {

  constructor() {
       super();

       this.state = {
           statusClass: 'entering'
       };
   }

  componentDidMount() {
    document.title = "Students Report. Statistics Project. Ezequiel Salatino. ";
    document.documentElement.className='blog';
  //  var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
   var topbar = 0
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});



  }

  render() {
    var heroImageStyle = {
      backgroundImage: 'url(' + process.env.PUBLIC_URL + '/resources/img/master/statistics/pres-bgr.png' + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const DesktopSD = props => <Responsive {...props} maxWidth={1279} minWidth={1025} />;
    const Mobile = props => <Responsive {...props} maxWidth={1024} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    return (
      <div className="blog-post blog-post-white " id="final-presentation">
      {/* <TopBar > */}
        {/* <GlobalNav active="blog" inPost noNav postTitle={["Statistics Project ", <span key="1" className="blog-highlight">Final Presentation</span>]} /> */}
      {/* </TopBar> */}

      <div className="blog-post__hero blog-post__hero-color" style={heroImageStyle} >
          <div className="blog-post__hero-center">
            <div className="blog-post__tags">
              <span className="blog-post__tag" >Statistics Project</span>
            </div>

              <h1 className="blog-post__title ">
                Master in <span key="2" className="blog-highlight">Data & Design / </span> Students Report
              </h1>
          </div>

      </div>

      <div className="blog-post__body">
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">
            <div className="blog-post__body__meta">
              <div className="blog-post__body__date">
                <Desktop>
                November<br/> 2019
                </Desktop>
                <DesktopSD>
                November<br/> 2019
                </DesktopSD>
                <Mobile>
                  November. 2019.
                </Mobile>
                <MobileXS>
                  November. 2019.
                </MobileXS>
              </div>

            </div>
          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
              Being the first time that this Master has been done, I wanted to know how the experience is for each student, and determine if there is a relation between the interest or difficulty and their profession, work type, work experience, and other factors.
            </p>
            <p>
              For that, I create a profile for each student based on their personal information. And then, through a paper form, I collect their impressions about each class.
            </p>
            <p>
              With all that data, combined with the assistance and lateness, I created a series of graphics to understand the 7 profiles and their path through the classes.
            </p>
            <p>
              The data gathering was conducted from the 23 of October to the 22 of November 2019. I end up with more than 150 entries about the classes.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              The Profiles
            </blockquote>
          </div>
        </div>

        <div className="final-presentation__profiles-images">

            <BlogPostImage half image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Profiles-1.png'} />
            <BlogPostImage half image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Profiles-2.png'} />
            <BlogPostImage half image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Profiles-3.png'} />
            <BlogPostImage half image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Profiles-4.png'} />
            <BlogPostImage half image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Profiles-5.png'} />
            <BlogPostImage half image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Profiles-6.png'} />
            <BlogPostImage half image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Profiles-7.png'} />

        </div>

        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
              Each one of these graphics represents a student. The idea was to create a symbol that represents the students and allow me to compare them.
            </p>
            <p>
              In the graphics above, you can see the meaning of each part of the symbols, and recognize how to compare their characteristics.
            </p>

            <p>
              With the profiles ready I worked in the paths.
            </p>

          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Each Student Have a Path
            </blockquote>
          </div>
        </div>
        <div className="final-presentation__paths-image">

            <BlogPostImage  image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Paths.png'} />


        </div>

        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
              With the data from the class cards, I created this graphic to compare the experience of each student. It is easy to see how some classes are more difficult for all the profiles, and how the classes are different for each student.
            </p>
            <p>
              This graphic has different readings, you can focus on the paths and compare classes and students, see how the work type and hours affect, or not, the attendance.
            </p>

            <p>
              Lastly, combining all the data from the students, I worked in these box plots for each class.
            </p>

          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Classes
            </blockquote>
          </div>
        </div>
        <div className="final-presentation__classes-image">

            <BlogPostImage  image={process.env.PUBLIC_URL + '/resources/img/master/statistics/Classes-interest-difficulty.png'} />

        </div>

        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
              I ordered this graphic by data points since the classes with more data seem more relevant and accurate. But the graphic shows us some interesting information, like the fact that almost all students agree on how Schematics and Cartography are interesting classes. In other cases, like Data & Drawing, the opinion is different and some students find it more interesting than others.
            </p>
            <p>
              Looking more broadly, we can see how the total average for the Master so far shows us that it is being more interest than difficult in all the classes.
            </p>

          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Conclusions
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
              After collecting, working with the data, and create the graphics, I can't validate my original hypothesis. The path of each student is different, but with the data collected is difficult to say that the difference is related to the professional profiles or interests of the students. At least not with the timeframe of this project.
            </p>
            <p>
              But... I feel that the information acquired and graphics created works as a good report of how the Master is being experienced by the students.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">
            <h4>Data & Resources</h4>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
              Here you can download all the <a href={process.env.PUBLIC_URL + '/resources/img/master/statistics/graphics.zip'} target="_blank">graphics</a> and access to the <a href="https://drive.google.com/open?id=1tsuQETVm1bWcsxJBIDQu6Uqlv-DRPbnJhPeg2Yujg5c" target="_blank">data</a> that I use for this project. To create the box plots for the classes graphic I use  <a href="https://plot.ly/~Esala/3/" target="_blank">plot.ly</a>.
            </p>

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
)(BlogPost);
