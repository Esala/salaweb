import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../Home/index.js';
import Info from '../Info/index.js';
import Projects from '../Projects/index.js';

function PageContainer({ location }) {
  return (
    <div>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <div className="page-container">
            <Switch location={location}>
              <Route  path="/" exact component={Home} />
              <Route  path="/info" exact component={Info} />
              <Route  path="/projects" exact component={Projects} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(PageContainer);
