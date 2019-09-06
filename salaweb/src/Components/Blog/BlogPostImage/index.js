import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import { Link } from 'react-router-dom';

import './BlogPostImage.css';

class BlogPostImage extends React.Component {
  componentDidMount() {}

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;

    const { image, text } = this.props;
    let className = 'blog-post-image ';




    return (
      <div className={className} >
        <div className="blog-post-image__image" >
          <img src={image} alt=""/>
        </div>
        <div className="blog-post-image__text" >
          {text}
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
)(BlogPostImage);
