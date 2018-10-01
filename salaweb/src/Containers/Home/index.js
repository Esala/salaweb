import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Home.css';

class Home extends React.Component {
  componentDidMount() {document.title = "Hi, I'm Ezequiel Salatino";}

  render() {

    return (
      <div className="home">
        <div className="container">
          <div className="col col-12">
            <h1 className="page-component page-component-1">Hi, I’m Ezequiel Salatino. <span className="highlight">UI Designer</span>, living in Mendoza, Argentina.</h1>
            <p className="p-b page-component page-component-2">
              <Link to="/info/" className="page-component page-component-3">
                info
              </Link>
              <br/>
              <Link to="/projects/"  className="page-component page-component-5">
                currently working
              </Link>
              <br/>
              <a
                href="https://www.behance.net/EzequielSalatino"
                target="_blank"
                rel="noopener noreferrer"
                className="page-component page-component-7"
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
