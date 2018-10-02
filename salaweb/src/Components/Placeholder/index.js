import React from 'react';
import { connect } from 'react-redux';



import './Placeholder.css';

class Placeholder extends React.Component {
  componentDidMount() {}

  render() {
    const { height } = this.props;
    let className = 'placeholder ';
    if (height) {
      var placeholderHeight = {
          height:  height + "px"
      };
    }
    return (
      <div className={className} style={placeholderHeight || 400} >
        loading
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
