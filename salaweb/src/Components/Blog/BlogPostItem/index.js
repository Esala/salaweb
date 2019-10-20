import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './BlogPostItem.css';

class BlogPostItem extends React.Component {
  componentDidMount() {}

  render() {

    const { title, image, tags, date, category, primary, link, domain, inverted } = this.props;
    let className = 'blog-post-item ' +
      (primary ? ' blog-post-item-primary' : '') ;


    let colClassName = (primary ? ' col-12' : 'col-7') ;

    const tagsItems = tags.map((tag, index) =>
      <span className="blog-post-item__tag" key={index} >{tag}</span>
    );

    var domainString;
    if(domain){
      domainString = domain;
    }else {
      domainString = "/blog/"
    }

    var linkElement;
    if(link){
      linkElement = (
        <Link
          to={domainString + link}
          className="blog-post-item__link"
        >
          {link}
        </Link>
      )
    }

    var titleElement;
    if(primary){
      titleElement = (
        <h1 className="blog-post-item__title">
          {title}
        </h1>
      )
    } else {
      titleElement = (
        <h2 className="blog-post-item__title">
          {title}
        </h2>
      )
    }

    var imageStyle = {
      backgroundImage: 'url(' + image + ')',
    };

    return (
      <div className={className}>
        {linkElement}
        <div className="container">
          <div className='col col-5 blog-post-item__spacer-col'>
          </div>
          <div className={'col ' + colClassName}>
            <div className="blog-post-item__image" style={imageStyle}> </div>
            <div className="blog-post-item__content">
              <div className="blog-post-item__tags">
                {tagsItems}
              </div>
              {titleElement}

              <div className="blog-post-item__meta">
                <div className="blog-post-item__meta__date">
                  {date}
                </div>
                <div className="blog-post-item__meta__category">
                  {category}
                </div>
              </div>
              {this.props.children}
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
)(BlogPostItem);
