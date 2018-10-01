import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../Home/index.js';
import Info from '../Info/index.js';
import Projects from '../Projects/index.js';
//Projects
import Psychopharmacology from '../ProjectsItems/Psychopharmacology/index.js';
import Yacopini from '../ProjectsItems/Yacopini/index.js';
import Mercadon from '../ProjectsItems/Mercadon/index.js';
import Cooking from '../ProjectsItems/Cooking/index.js';

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
              <Route  path="/projects/psychopharmacology-institute" exact component={Psychopharmacology} />
              <Route  path="/projects/yacopini" exact component={Yacopini} />
              <Route  path="/projects/el-mercadon" exact component={Mercadon} />
              <Route  path="/projects/cooking-app" exact component={Cooking} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(PageContainer);
