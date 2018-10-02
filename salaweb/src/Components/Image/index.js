import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import Placeholder from 'app/Components/Placeholder/index.js';


import './Image.css';

class Image extends React.Component {
  componentDidMount() {}

  render() {
    const { url, height } = this.props;
    let className = 'image ';
    return (
      <div className={className}>
        <LazyLoad height={height || 400} debounce={200} placeholder={<Placeholder height={height || 400} />}>
          <img src={url} alt=""/>
        </LazyLoad>
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
)(Image);
