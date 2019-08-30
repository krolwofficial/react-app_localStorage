import React from "react";
import { Switch, Route, withRouter } from "react-router";
import Dashboard from "./components/Dashboard";
import Gallery from "./components/Gallery";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Router: React.FC = (props: any) => {
  return (
    <>
      <Route
        render={() => (
          <TransitionGroup>
            <CSSTransition
              key={props.location.key}
              timeout={30000}
              classNames="fade"
            >
              <Switch location={props.location}>
                <Route exact path="/" component={Dashboard} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
};

export default withRouter(Router);
