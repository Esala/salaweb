import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import animateScrollTo from 'animated-scroll-to';
import Home from '../Home/index.js';
import Info from '../Info/index.js';
import Projects from '../Projects/index.js';
//Projects
import Psychopharmacology from '../ProjectsItems/Psychopharmacology/index.js';
import Yacopini from '../ProjectsItems/Yacopini/index.js';
import Mercadon from '../ProjectsItems/Mercadon/index.js';
import Cooking from '../ProjectsItems/Cooking/index.js';
import Maps from '../ProjectsItems/Maps/index.js';

function PageContainer({ location }) {

  return (
    <div>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 800, exit: 400 }}
          classNames={'fade'}
          mountOnEnter
          unmountOnExit
          addEndListener={(n, done) => {


            setTimeout(function() {
              var locationTo = this.location.href;
              var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
              if (locationTo.indexOf("/projects/") > 0){
                if((locationTo.length - locationTo.indexOf("/projects/"))  > 10) {

                  animateScrollTo(topbar, {speed:200,  minDuration: 400,  maxDuration: 1200,});
                }else {

                  animateScrollTo(topbar, {speed:200,  minDuration: 400,  maxDuration: 1200,});
                }
              }else {

                if (locationTo.indexOf("/info/") > 0){
                  animateScrollTo(topbar, {speed:200,  minDuration: 400,  maxDuration: 1200,});
                }else{
                  animateScrollTo(0, {speed:200,  minDuration: 400,  maxDuration: 1200,});
                }
              }
            }, 50);

          }}
        >
          <div className="page-container">
            <Switch location={location}>
              <Route  path="/" exact component={Home} />
              <Route  path="/salaweb" exact component={Home} />
              <Route  path="/info" exact component={Info} />
              <Route  path="/projects" exact component={Projects} />
              <Route  path="/projects/psychopharmacology-institute" exact component={Psychopharmacology} />
              <Route  path="/projects/yacopini" exact component={Yacopini} />
              <Route  path="/projects/el-mercadon" exact component={Mercadon} />
              <Route  path="/projects/cooking-app" exact component={Cooking} />
              <Route  path="/projects/some-maps" exact component={Maps} />
            </Switch>

          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(PageContainer);
