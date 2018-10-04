import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Home.css';

class Home extends React.Component {
  constructor() {
       super();

       this.state = {
           statusClass: 'entering'
       };
   }

  componentDidMount() {
    document.title = "Hi, I'm Ezequiel Salatino";
    this.setState({ statusClass: 'scrolled' });
  }

  render() {

    return (
      <div className={"home " + this.state.statusClass}>
        <div className="container">
          <div className="col col-12">
            <h1 className="page-component  1">Hi, I’m Ezequiel Salatino. <span className="highlight">UI Designer</span>, living in Mendoza, Argentina.</h1>
            <p className="p-b page-component  2">
              <Link to="/info/">
                about me
              </Link>
              {' '} / {' '}
              <Link to="/projects/"  >
                things i made
              </Link>

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
