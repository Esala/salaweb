import React from 'react';
import { connect } from 'react-redux';



import './Placeholder.css';

class Placeholder extends React.Component {
  componentDidMount() {}

  render() {
    const { height, light } = this.props;
    let className = 'placeholder' +
      (light ? ' placeholder-light' : '');

    if (height) {
      var placeholderHeight = {
          height:  height + "px"
      };
    }
    return (
      <div className={className} style={placeholderHeight || 400} >
        <div className="placeholder__loader"></div>
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
)(Placeholder);
