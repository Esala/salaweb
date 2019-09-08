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
    const DesktopSD = props => <Responsive {...props} maxWidth={1279} minWidth={1025} />;
    const Mobile = props => <Responsive {...props} maxWidth={1024} minWidth={421} />;
    const MobileXS = props => <Responsive {...props} maxWidth={420} />;
    return (
      <div className="blog-post ">
      <TopBar >
        <GlobalNav active="blog" inPost postTitle={["Every place is given its character by ", <span key="1" className="blog-highlight">certain patterns‎</span>]} />
      </TopBar>
      <BlogPostHeroImage image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage2.jpg'} />
      <div className="blog-post__hero">

          <div className="blog-post__tags">
            <span className="blog-post__tag" >Tag 1</span> <span className="blog-post__tag" >Tag 1</span> <span className="blog-post__tag" >Tag 1</span>
          </div>
            <h1 className="blog-post__title ">
              Every place is given its character by <span key="1" className="blog-highlight">certain patterns‎</span>
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
              It does not mean, for instance, that the man who made it left his own person out of it. It was part of his person that he liked the bench, and wanted to carve hearts in it. Perhaps he made it for his favorite girl.
            </p>
            <p>
              It is perfectly possible to make a thing which has the quality which has no name, and still let it reflect your personality. Your person, and the likes and dislikes which are part of you, are themselves forces in your garden, and your garden must reflect those forces just as it reflects the other forces which make leaves grow and birds sing.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="col col-12 col-t-12 blog-post__body__quote">
            <blockquote>
              “A last word which can helf to catch the quality without a name is the word eternal”
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
            <BlogPostImage image={process.env.PUBLIC_URL + '/resources/img/blog/testpost/testimage4.jpg'} text="And so you see, in spile of every effort lo give this quality a name, there is no single name which captures it. " />
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
              But if you use the word "ego'' to mean the center of a person's character, then the idea of making something egoless can sound as though you want the person to efface himself completely. That is not what the word means at all; and yet because of it, the word is not quite right.
            </p>
            <p>
              It is perfectly possible to make a thing which has the quality which has no name, and still let it reflect your personality. Your person, and the likes and dislikes which are part of you, are themselves forces in your garden, and your garden must reflect those forces just as it reflects the other forces which make leaves grow and birds sing.
            </p>
            <p>
            We know, now, what the quality without a name is like, in Reeling and in character. But so far, concretely, we have not. seen this quality in any system larger than a tree, a fond, a bench. Yet it can he in anything — in buildings, animals, plants, cities, streets, the wilderness — and in ourselves. We shall begin to understand it concretely, in all these larger pieces of the world, only when we first understand it in
ourselves.


            </p>
            <p>
            It is, for instance, the wild smile of the gypsies dancing in the road. </p>
          </div>
          <DesktopSD>
            <div className="col col-3 col-m-12 col-t-12 blog-post__author">


                <div className="blog-post__author__title">About me</div>
                <p className="p p-s"> I’m Ezequiel Salatino, a freelance designer interested in interfaces, design systems, maps and data visualizations. Currently living in Barcelona.</p>

            </div>
          </DesktopSD>
          <Mobile>
            <div className="col col-3 col-t-12 col-m-12 blog-post__author">


                <div className="blog-post__author__title">About me</div>
                <p className="p p-s"> I’m Ezequiel Salatino, a freelance designer interested in interfaces, design systems, maps and data visualizations. Currently living in Barcelona.</p>

            </div>
          </Mobile>
          <MobileXS>
            <div className="col col-3 col-m-12 blog-post__author">


                <div className="blog-post__author__title">About me</div>
                <p className="p p-s"> I’m Ezequiel Salatino, a freelance designer interested in interfaces, design systems, maps and data visualizations. Currently living in Barcelona.</p>

            </div>
          </MobileXS>

        </div>

        <div className="container">
        <div className="col col-3 col-m-12 col-t-12">

        </div>
            <div className="col col-7 col-t-12 blog-post__next">
            <Link
              to={"/blog/blog-post-2"}
              className="blog-post__next__link"
            >
              Next: “People don’t need art for them, film is just something to do”
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
