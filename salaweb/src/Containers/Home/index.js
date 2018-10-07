import React from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
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
    document.title = "Hi, I'm Ezequiel";
    this.setState({ statusClass: 'scrolled' });
  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;
    return (
      <div className={"home " + this.state.statusClass}>
        <div className="container">
          <div className="col col-12">
            <Desktop>
              <h1 className="   1">Hi, I’m Ezequiel Salatino. <span className="highlight">UI Designer</span>, living in Mendoza, Argentina.</h1>
            </Desktop>

            <Mobile>
              <h1 className="   1">Hello,<br/> I’m Ezequiel Salatino.<span className="highlight">UI Designer</span> from Argentina.</h1>
            </Mobile>

            <p className="p-b ">
              <Link to="/info/">
                About me
              </Link>
              {' '} / {' '}
              <Link to="/projects/"  >
                Things I made
              </Link>
                {' '} / {' '}
              <a href="mailto:ezequiel.salatino@gmail.com">
                Get in touch.
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
