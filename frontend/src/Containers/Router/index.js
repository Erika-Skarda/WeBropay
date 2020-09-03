import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import SplashScreen from "../Pages/SplashScreen/index"
import Page from "../Pages/Home/index";

export const routes = {

  splascreen:"/",
  home:"/home"

};
function Router(props) {
  return (
    <BrowserRouter history={props.history}>
      <Switch>
        <Route exact path={routes.splascreen} component={SplashScreen} />
        <Route exact path={routes.home} component={Page} />

        {/* <Route path={routes.error} component={PageError} />  */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;