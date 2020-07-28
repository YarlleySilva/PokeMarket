import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Ghost from "./pages/Ghost";
import Dragon from "./pages/Dragon";

const Routes = () => {
  return (

    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Ghost} path="/Ghost" />
      <Route component={Dragon} path="/Dragon" />
    </Switch>
  );
}

export default Routes;

