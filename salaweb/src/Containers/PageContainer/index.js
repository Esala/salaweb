import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ReactGA from 'react-ga';
//import animateScrollTo from 'animated-scroll-to';
import Home from '../Home/index.js';
import Info from '../Info/index.js';
import Projects from '../Projects/index.js';
//Projects
import Psychopharmacology from '../ProjectsItems/Psychopharmacology/index.js';
import Yacopini from '../ProjectsItems/Yacopini/index.js';
import Mercadon from '../ProjectsItems/Mercadon/index.js';
import Amg from '../ProjectsItems/Amg/index.js';
import Subirats from '../ProjectsItems/Subirats/index.js';
import Bebot from '../ProjectsItems/Bebot/index.js';


function PageContainer({ location }) {

  ReactGA.initialize('UA-146497322-1');

  return (
    <div>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 800, exit: 400 }}
          classNames={'fade'}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            ReactGA.pageview(location.pathname + location.search);
            //console.log(location.pathname + location.search);
          }}
          addEndListener={(n, done) => {
            //

            //console.log(done)

            /*
            setTimeout(function() {
              var locationTo = this.location.href;
              var topbar = document.getElementsByClassName("top-bar")[0].offsetHeight;
              if (locationTo.indexOf("/projects/") > 0){
                if((locationTo.length - locationTo.indexOf("/projects/"))  > 10) {

                  animateScrollTo(topbar, {speed:1,  minDuration: 1200});
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
            }, 50);*/

          }}
        >
          <div className="page-container">
            <Switch location={location} >
              <Route  path="/" exact component={Home} />
              {/* <Route  path="/salaweb" exact component={Home} /> */}
              <Route  path="/about" exact component={Info} />
              <Route  path="/projects" exact component={Projects} />
              <Route  path="/projects/psychopharmacology-institute" exact component={Psychopharmacology} />
              <Route  path="/projects/yacopini" exact component={Yacopini} />
              <Route  path="/projects/el-mercadon" exact component={Mercadon} />
              <Route  path="/projects/subirats" exact component={Subirats} />
              <Route  path="/projects/amg" exact component={Amg} />
              <Route  path="/projects/bebot" exact component={Bebot} />
            </Switch>

          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(PageContainer);
