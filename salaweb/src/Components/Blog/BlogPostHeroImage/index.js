import React from 'react';
import { connect } from 'react-redux';



import './BlogPostHeroImage.css';

class BlogPostHeroImage extends React.Component {
  componentDidMount() {}

  render() {

    const { image } = this.props;
    let className = 'blog-post-hero-image ';


    var imageStyle = {
      backgroundImage: 'url(' + image + ')',
    };

    return (
      <div className={className} style={imageStyle}>


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
)(BlogPostHeroImage);
