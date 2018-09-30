import React from 'react';
import { connect } from 'react-redux';


import './TopBar.css';

class TopBar extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="top-bar">
        <div className="container">
          <div className="col col-12">
            {this.props.children}
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
)(TopBar);
