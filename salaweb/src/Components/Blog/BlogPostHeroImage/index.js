import React from 'react';
import { connect } from 'react-redux';



import './BlogPostHeroImage.css';

class BlogPostHeroImage extends React.Component {
  componentDidMount() {}

  render() {

    const { image, text } = this.props;
    let className = 'blog-post-hero-image ';


    var imageStyle = {
      backgroundImage: 'url(' + image + ')',
    };

    var textElement;
    if(text){
      textElement =
        <div className="blog-post-hero-image__text">
          {text}
        </div>

    }

    return (
      <div className={className} style={imageStyle}>
        {textElement}

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
