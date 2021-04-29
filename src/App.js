import React, {useState, useEffect}  from "react";

import Index from "./components/website";
import Header from "./components/website/header"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Notfound from "./components/website/notfound";
import Health from "./components/website/health";
import IndividualRegistration from "./components/website/individual_registration";
import IndividualRequest from "./components/website/individual_request";
import ProviderRegistration from "./components/website/provider_registration";

export default function App(props) {

  return (
    <div>
    <div>

          <Router>
            <Switch>
              <Route exact path="/" component={Index } /> 
              <Route path="/individual_registration" component={IndividualRegistration} />  
              <Route path="/individual_request" component={IndividualRequest} />  
              <Route path="/provider_registration" component={ProviderRegistration} />  
              <Route path="/health" component={Health } />           
              <Route path="*" component={Notfound} />
            </Switch>
          </Router>

        </div>
    </div>
  );
}
