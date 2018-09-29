import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Home.css';

class Home extends React.Component {
  componentDidMount() {}

  render() {

    return (
      <div className="home">
          <h1>Home page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quae natus soluta obcaecati. Fugiat est reprehenderit nemo quia ipsam. Mollitia autem modi corrupti quo deserunt numquam, quam ut consequuntur laborum.</p>
        <Link
          to="/projects/"
          className="link"
        >
          Projects
        </Link>
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
