import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import esala from 'app/resources/img/esala.jpg';


import './Avatar.css';

class Avatar extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="avatar">
        <img src={esala} alt=""/>
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
)(Avatar);
