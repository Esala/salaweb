import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';


import './Info.css';

class Info extends React.Component {
  componentDidMount() {
     document.title = "About me - Ezequiel Salatino";
  }

  render() {

    return (
      <div className="info">
        <TopBar>
          <GlobalNav active="info" />
        </TopBar>
        <div className="container">
          <div className="col col-12">
            <h1>I’m a designer interested in user interfaces, design systems, maps & data visualizations.</h1>
          </div>
        </div>
        <div className="container">
          <div className="col col-9">
            <p className="p-b">
              As an element in the world, each pattern is a relationship between a certain context, a certain system of forces which occurs repeatedly in that context, and a certain spatial configuration which allows these forces to resolve themselves. As an element of language, a pattern is an instruction, which shows how this spatial configuration can be used, over and over again, to resolve the given system of forces, wherever the context makes it relevant.‎
            </p>

          </div>
          <div className="col col-3">
            <h3>Get in touch</h3>
            <p>
              <Link to="/">
                ezequiel.salatino@gmail.com
              </Link>
              <br/>
              <Link to="/">
                +54 9 261 3 420 166
              </Link>
              <br/>
              Mendoza, Argentina.
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
)(Info);
