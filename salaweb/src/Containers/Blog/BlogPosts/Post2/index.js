import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import animateScrollTo from 'animated-scroll-to';
import { Link } from 'react-router-dom';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';
import ProjectsNav from 'app/Components/ProjectsNav/index.js';
import BlogPostHeroImage from 'app/Components/Blog/BlogPostHeroImage/index.js';
import BlogPostImage from 'app/Components/Blog/BlogPostImage/index.js';


import '../BlogPost.css';

class BlogPost extends React.Component {
  constructor() {
       super();

       this.state = {
           statusClass: 'entering'
       };
   }

  componentDidMount() {
    document.title = "Every place is given its character by certain patterns. Blog. Ezequiel Salatino. ";
    document.documentElement.className='blog';
    var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
    animateScrollTo(topbar, {speed:1,  minDuration: 1200});

  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    return (
      <div className="blog-post ">
      <TopBar >
        <GlobalNav active="blog" inPost postTitle={["People ", <span key="1" className="blog-highlight">don’t need art‎</span>, " for them, film is just something to do"]} />
      </TopBar>
      <BlogPostHeroImage image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage4.jpg'} />
      <div className="blog-post__hero">

          <div className="blog-post__tags">
            <span className="blog-post__tag" >Tag 1</span> <span className="blog-post__tag" >Tag 1</span> <span className="blog-post__tag" >Tag 1</span>
          </div>
            <h1 className="blog-post__title ">
              People <span key="1" className="blog-highlight">don’t need art</span> for them, film is just something to do
            </h1>

      </div>

      <div className="blog-post__body">
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">
            <div className="blog-post__body__meta">
              <div className="blog-post__body__date">
              Sep 20. 2019
              </div>
              <div className="blog-post__body__category">
              Personal Project
              </div>
            </div>
          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">
            <p>
              When a movie enters the marketplace, the audience is understanding it according to the channels through which it was made available, not necessarily according to what the film actually is. We promoted the film in a way that we thought would make it seem interesting, and when the campaign started going viral, it came as no surprise to me that there was some backlash. It was an interesting experience, and it made me think a lot of people don’t need art—for them, film is just a collective activity, just something to do. Art films have no status in China, but then again they don’t need status. Globally, there’s a stable network for them to exist in.
            </p>
            <p>
              On the funding side, things have gotten better, though I’m not sure if that will continue indefinitely. When I was making Kaili Blues, it was hard to raise even 30,000 RMB. But now there’s a lot of money, and people are looking for ways to fund movies. Interestingly enough, some of these funders don’t really know that much about movies, but if my filmmaker friends want to raise a million RMB for a project, it’s not that hard to do.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              “But I was also inspired by what Hou Hsiao-Hsien did with the long take, especially in Goodbye South, Goodbye.”
            </blockquote>
          </div>
        </div>
        <div className="container">
          <div className="col col-3 col-t-12 col-m-12">

          </div>
          <div className="col col-7 col-t-12 blog-post__body__copy">
            <p>
            But if you use the word "ego'' to mean the center of a person's character, then the idea of making something egoless can sound as though you want the person to efface himself completely. That is not what the word means at all; and yet because of it, the word is not quite right.
            </p>
            <p>
              It is perfectly possible to make a thing which has the quality which has no name, and still let it reflect your personality. Your person, and the likes and dislikes which are part of you, are themselves forces in your garden, and your garden must reflect those forces just as it reflects the other forces which make leaves grow and birds sing.
            </p>
          </div>

        </div>
        <div className="container">
          <div className="col col-12 ">
            <BlogPostImage image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage3.jpg'} />
          </div>
        </div>

        <div className="container">
          <Desktop>
            <div className="col col-3 col-t-12 col-m-12 blog-post__author">


                <div className="blog-post__author__title">About me</div>
                <p className="p p-s"> I’m Ezequiel Salatino, a freelance designer interested in interfaces, design systems, maps and data visualizations. Currently living in Barcelona.</p>

            </div>
          </Desktop>
          <div className="col col-7 col-t-12 blog-post__body__copy">
            <p>
              The bigger the scale, obviously the more complicated things become. And those complications can make the final work a little clumsy. So I do prefer my earlier work. With a short, you can make something polished and exquisite. But one thing that hasn’t changed is what I’m looking for in my films. When it comes to my approach, it all feels the same, as if no time has passed between these projects. Other people might punctuate time by buying a dog or some other activity like that, but for me, my memory is completely taken over by these movies. And when I look back at the difficulties of making the features, what I admire is my courage.
            </p>
            <p>
              When a movie enters the marketplace, the audience is understanding it according to the channels through which it was made available, not necessarily according to what the film actually is. We promoted the film in a way that we thought would make it seem interesting, and when the campaign started going viral, it came as no surprise to me that there was some backlash. It was an interesting experience, and it made me think a lot of people don’t need art—for them, film is just a collective activity, just something to do. Art films have no status in China, but then again they don’t need status. Globally, there’s a stable network for them to exist in.
            </p>
            <p>
          On the funding side, things have gotten better, though I’m not sure if that will continue indefinitely. When I was making Kaili Blues, it was hard to raise even 30,000 RMB. But now there’s a lot of money, and people are looking for ways to fund movies. Interestingly enough, some of these funders don’t really know that much about movies, but if my filmmaker friends want to raise a million RMB for a project, it’s not that hard to do.  </p>

          </div>
          <Mobile>
            <div className="col col-3 col-t-12 col-m-12 blog-post__author">


                <div className="blog-post__author__title">About me</div>
                <p className="p p-s"> I’m Ezequiel Salatino, a freelance designer interested in interfaces, design systems, maps and data visualizations. Currently living in Barcelona.</p>

            </div>
          </Mobile>
          <MobileXS>
            <div className="col col-3 col-t-12 col-m-12 blog-post__author">


                <div className="blog-post__author__title">About me</div>
                <p className="p p-s"> I’m Ezequiel Salatino, a freelance designer interested in interfaces, design systems, maps and data visualizations. Currently living in Barcelona.</p>

            </div>
          </MobileXS>

        </div>

        <div className="container">
        <div className="col col-3 col-t-12 col-m-12">

        </div>
            <div className="col col-7 col-t-12 blog-post__next">
            <Link
              to={"/blog/blog-post"}
              className="blog-post__next__link"
            >
              Next: “Every place is given its character by certain patterns‎”
            </Link>

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
