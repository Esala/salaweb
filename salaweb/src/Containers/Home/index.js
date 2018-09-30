import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Home.css';

class Home extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="home">
        <div className="container">
          <div className="col col-12">
            <h1>Hi, I’m Ezequiel Salatino.<br/><span className="highlight">UI Designer</span>, living in <br/>Mendoza, Argentina.</h1>
            <p className="p-b">
              <Link to="/info/">
                info
              </Link>
              <br/>
              <Link to="/projects/">
                currently working
              </Link>
              <br/>
              <a
                href="https://www.behance.net/EzequielSalatino"
                target="_blank"
                rel="noopener noreferrer"
              >
                old work
              </a>
            </p>

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
)(Home);
