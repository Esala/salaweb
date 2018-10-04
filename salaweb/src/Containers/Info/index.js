import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Responsive from 'react-responsive';
import TopBar from 'app/Components/TopBar/index.js';
import GlobalNav from 'app/Components/GlobalNav/index.js';


import './Info.css';

class Info extends React.Component {
  componentDidMount() {
     document.title = "About me - Ezequiel Salatino";
  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Mobile = props => <Responsive {...props} maxWidth={1279} />;

    return (

      <div className="info">
        <TopBar className="page-component ">
          <GlobalNav active="info" />
        </TopBar>
        <div className="container ">
          <div className="col col-12 page-component">
              <Mobile>
                <br/><br/><br/>
              </Mobile>
            <h1 >I’m a designer interested in user interfaces, design systems, maps & data visualizations.</h1>
          </div>
        </div>

        <div className="container page-component ">
          <Desktop>
            <div className="col col-9 col-m-12">
              <p className="p-b">
                I start designing and building websites in 2003. Studied graphic design in Mendoza, Argentina. I worked as a freelance but also in a few local an international companies. </p>
              <p className="p-b"> Today I work as a freelance designer mainly focused in UI, but also working as a product, UX and brand designer. Also now I'm working as a design partner in <a href="https://pannonica.design" target="_blank" rel="noopener noreferrer">pannonica.design</a>.
              </p>

            </div>
            <div className="col col-3 info__get-in-touch">
              <h3>Get in touch</h3>
              <p>

                <Link to="/" className="info__link">
                  ezequiel.salatino@gmail.com
                </Link>
                <br/>
                <Link to="/" className="info__link">
                  Behance
                </Link>
                <Link to="/" className="info__link">
                  Linked In
                </Link>

              </p>
            </div>
          </Desktop>
          <Mobile>

              <div className="col col-12 ">
                <p >

                  <Link to="/" className="info__link">
                    ezequiel.salatino@gmail.com
                  </Link>
                  <br/>
                  <Link to="/" className="info__link">
                    Behance
                  </Link>
                  <Link to="/" className="info__link">
                    Linked In
                  </Link>

                </p>
              </div>
              <div className="col col-12">
                <h3>Bio</h3>
                <p className="p-b">
                  I start designing and building websites in 2003. Studied graphic design in Mendoza, Argentina. I worked as a freelance but also in a few local an international companies. Today I work as a freelance designer mainly focused in UI, but also working as a product, UX and brand designer. Also now I'm working as a design partner in <a href="https://pannonica.design" target="_blank" rel="noopener noreferrer">pannonica.design</a>
                </p>

              </div>


          </Mobile>
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
