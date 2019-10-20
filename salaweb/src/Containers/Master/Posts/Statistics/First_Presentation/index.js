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

class BlogPost extends React.Component {
  constructor() {
       super();

       this.state = {
           statusClass: 'entering'
       };
   }

  componentDidMount() {
    document.title = "How MADD is different for each designer?. MADD 2019-20. Ezequiel Salatino. ";
    document.documentElement.className='blog';
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const DesktopSD = props => <Responsive {...props} maxWidth={1279} minWidth={1025} />;
    const Mobile = props => <Responsive {...props} maxWidth={1024} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    return (
      <div className="blog-post blog-post-white">
      <TopBar >
        <GlobalNav active="blog" inPost noNav postTitle={["Statistics Project ", <span key="1" className="blog-highlight">How MADD is different for each designer?</span>]} />
      </TopBar>
      <BlogPostHeroImage image={process.env.PUBLIC_URL + '/resources/img/master/statistics/cover.jpg'} text="Diverse group of designers smiling and talking while working together on a project around a boardroom table in an office." />
      <div className="blog-post__hero">

          <div className="blog-post__tags">
            <span className="blog-post__tag" >Statistics Project</span>
          </div>
            <h1 className="blog-post__title ">
              How <span key="2" className="blog-highlight">MADD</span> is <span key="1" className="blog-highlight"> different‎</span> for each designer?
            </h1>

      </div>

      <div className="blog-post__body">
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">
            <div className="blog-post__body__meta">
              <div className="blog-post__body__date">
                <Desktop>
                <h1>25</h1> October<br/> 2019
                </Desktop>
                <DesktopSD>
                <h1>25</h1> October<br/> 2019
                </DesktopSD>
                <Mobile>
                  25 October. 2019.
                </Mobile>
                <MobileXS>
                  25 October. 2019.
                </MobileXS>
              </div>

            </div>
          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
            This is the first time that this Master has been done, and that is a good opportunity to learn how is this experience is for every one of us and to learn more about each other. The group of students is small but very diverse in profiles, making very interesting explore the expectations and how each class is perceived by each profile.
            </p>
            <p>

Also, I think is important to understand more about the experience, not only in how is related to a profile but also the daily and work-life of each student. For that, I will be also interested in data like location, travel time, weather, work habits, etc.
</p>
<p>

I believe that each designer has different skills related to their field of expertise or personal interest, and being this Master very multidisciplinary and with no previous information (projects, testimonies, etc), with this research, I expect to find how different profiles of designers and students create their own path based on their personal and professional interests.

            </p>
          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Objectives
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">
          <h4>Know ourselves</h4>
            <p>
            It could be useful to know our expectations and challenges within this program. Understand how each profile is better for each class and who is more interested in different topics could be useful for future projects.
            </p>

            <h4>Understand the experience</h4>
            <p>
              I will create a piece that helps to understand the experience of the students. I hope that this helps a new student to decide if this program will fulfill their expectations and understand how difficult could be, based on the intrinsic knowledge of each profile and the personal situation in Barcelona.
            </p>
          </div>

        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Data Gathering
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
              I divide the data gathering in 3 groups.


            </p>
            <div className="blog__list">
              <ul>
                <li>Personal data (related to each person)</li>
                <li>Class data (related to each class)</li>
                <li>Day data (related to an specific day)</li>

              </ul>
            </div>

            <h4>Personal data </h4>
            <div className="blog__list">
              <ul>
                <li>Attendance by Class</li>
                <li>Lateness by Class</li>
                <li>Distance / Travel Time by day
                  <ul>
                    <li>Location</li>
                    <li>Travel method</li>
                  </ul>
                </li>
                <li>Interests by Class</li>
                <li>Difficulty by Class</li>
              </ul>
            </div>

            <h4>Class data </h4>
            <div className="blog__list">
              <ul>
                <li>Interest by Student</li>
                <li>Difficulty by Student</li>
                <li>Pages read</li>
                <li>Hours</li>
              </ul>
            </div>

            <h4>Day data </h4>
            <div className="blog__list">
              <ul>
                <li>Weather</li>
                <li>Date</li>
                <li>Temperature</li>
                <li>City Events
                  <ul>
                    <li>Design Events</li>
                    <li>Cultural Events</li>
                    <li>Public Transport Status</li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>

        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Data Gathering Methods
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">
          <p>
            I will use different methods to collect the data:
          </p>
          <h4>Profile Form (once)</h4>
            <p>
            This form aims to collect general information of each student to use as a starting point to understand each profile and situation. {" "}
            <a href="https://forms.gle/sSgXd2NJEgkiXSC4A">https://forms.gle/sSgXd2NJEgkiXSC4A</a>
            </p>

            <h4>Class Card (each class)</h4>
            <p>
              I will print and share these cards for each class. I think a printed piece is better to capture the feelings of the moment. Later I will put the collected information to a digital format to process it.
            </p>
          </div>

        </div>
        <div className="container">
          <div className="col col-12 ">
            <BlogPostImage image={process.env.PUBLIC_URL + '/resources/img/master/statistics/classcard.png'} text="I will use some maps to get data about location and travel distance. " />
          </div>
        </div>

        <div className="container">

            <div className="col col-3 col-t-12 col-m-12">



            </div>

          <div className="col col-7 col-t-12 blog-post__body__copy">
            <h4>Attendance Form (each class)</h4>
            <p>
              This is a simple form that I will complete each class to record the attendance and lateness.  {" "}
              <a href="https://forms.gle/riGZ1htq2541bkXV9">https://forms.gle/riGZ1htq2541bkXV9</a>
            </p>

            <h4>Day Form (each day)</h4>
            <p>
              I will complete each class this form to record some basic information about each day.  {" "}
              <a href="https://forms.gle/spYMk5LdTHtenLMDA">https://forms.gle/spYMk5LdTHtenLMDA</a>
            </p>

            <h4>Other information</h4>
            <p>
              I will use public information about the weather, <a href="https://www.tmb.cat/es/">public transport of Barcelona</a>, design event calendars and cultural event calendars. And syllabus and bibliography for class information.
            </p>

          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Data Points
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">
            <p>
              With the data gathering defined in 4 weeks of research, I expected to collect this amount of data points:
            </p>
            <div className="blog__list">
              <ul>
                <li><strong>Total of 336 data points about the classes</strong>
                <ul>
                  <li>24 classes
                    <ul>
                      <li>2 Classes per day</li>
                      <li>3 days per week</li>
                      <li>4 weeks</li>
                    </ul>
                  </li>
                  <li>
                    14 data points per class
                  </li>
                </ul>
                </li>

              </ul>
            </div>

            <div className="blog__list">
              <ul>
                <li><strong>Total of 108 data points about the students</strong>
                <ul>
                  <li>12 days
                    <ul>
                      <li>9 Data point per student</li>
                    </ul>
                  </li>

                </ul>
                </li>

              </ul>
            </div>

            <div className="blog__list">
              <ul>
                <li><strong>14 Data Points per Class</strong>
                <ul>
                  <li>6  - Interest </li>
                  <li>6  - Difficulty </li>
                  <li>1  - Pages Readed </li>
                  <li>1  - Hours </li>
                  <li>6  - Interest </li>

                </ul>
                </li>

              </ul>
            </div>

            <div className="blog__list">
              <ul>
                <li><strong>9 Data Points per Student per Day</strong>
                <ul>
                  <li>2  - Interest </li>
                  <li>2  - Difficulty </li>
                  <li>2  - Attendance </li>
                  <li>2  - Lateness </li>
                  <li>1  - Travel Time </li>
                </ul>
                </li>

              </ul>
            </div>

            <div className="blog__list">
              <ul>
                <li><strong>4 Data Points per Day</strong>
                <ul>
                  <li>1  - Weather </li>
                  <li>1  - Date </li>
                  <li>1  - Temperature </li>
                  <li>1  - Events </li>

                </ul>
                </li>

              </ul>
            </div>

          </div>

        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Scope & Limitations
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">
          <h4>Limitations</h4>
            <p>
            The main limitation of this project is time. If I look at the data per class I only will achieve 4 instances.
            </p><p>
But even if that is the case, 4 classes are almost half of the total instances of each quarterly class. And for the nature of the objective of this project, that is getting an idea of how interesting and difficult is each class for each profile, It seems like the information will be relevant.
            </p><p>
Other information, like weather, could be more relevant to find correlations if I collect data for more time. In a month maybe the weather is more or less the same and no interesting findings appear. For example, comparing December to June, seems more relevant than comparing 20 of October to 10 of November. But I'm hoping to find some correlation between assistance or lateness and a very cold day or a rainy week, or at least find that there is no correlation at all.
            </p><p>
The good thing is that the group has only 6 students, which means that I can study the whole population.
            </p><p>
Taking this limitations into account, I will look the data in 2 ways to try to arrive at better conclusions:
            </p>
            <div className="blog__list">
              <ul>
                <li>
                  <strong>Specific</strong> <br/>
                  Looking for which class is more interesting or difficult, and how different profiles share or not characteristics.<br/><br/>
                </li>
                <li>
                  <strong>Global</strong> <br/>
                  Looking to answer questions like, is this program being too difficult? is interesting for all or just for some profiles? Is being too difficult to assist for some profiles?
                </li>
              </ul>
            </div>

            <h4>Interferences</h4>
            <p>
              Data like assistance or lateness can represent a lack of interest but also could be a problem in the city or public transportation, a rainy or very cold day. To avoid only have one part of the information I want to have information about location, the way students travel to Elisava, how and where they work, etc. That will give me a bigger picture of the situation.
            </p>

            <h4>Further possibilities</h4>
            <p>
            This project could be a lot more relevant with the data of the whole program and classes, but this first step could be useful to test the idea and see if the information can give us interesting insights.
            </p>
          </div>

        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Possible Outcomes
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">

            <p>
            Based on the objectives and the main question that I'm looking to answer, and with the data collected I could create visualizations that, for example, allow the viewer to understand:
            </p>
            <div className="blog__list">
              <ul>
                <li>
                  The differences between each profile
                </li>
                <li>
                  How each profile experience the Master
                  <ul>
                    <li>
                      How demanding is the Master for different work habits
                    </li>
                    <li>
                      How demanding is the Master for different locations
                    </li>
                    <li>
                      Which classes are more interesting for each profile
                    </li>
                    <li>
                      Which classes are more difficult for each profile
                    </li>

                  </ul>
                </li>
                <li>
                  How difficult is the Master
                </li>
                <li>
                  How interesting is the Master
                </li>

              </ul>
            </div>

          </div>

        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              Thanks!
            </blockquote>
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
