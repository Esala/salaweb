import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Home from "./containers/home/Home";
import Page from "./containers/page/Page";


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/page">Subpage</Link>
        </div>
        <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} />}
            </TransitionGroup>
          )}/>
          <Route
           path="/page"
           children={({ match, ...rest }) => (
             <TransitionGroup component={firstChild}>
               {match && <Page {...rest} />}
             </TransitionGroup>
          )}/>
      </div>
    );
  }
}
export default App;
