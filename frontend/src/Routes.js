import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import DashboardStore from './pages/DashboardStore';
import CadastroResponsavel from './pages/CadastroResponsavel';


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/cadastroResponsavel" component={CadastroResponsavel} />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/store" component={DashboardStore}/>
        <Route path="/login" component={Login}/>
        <Route path="" component={Home}/>
      </Switch>
    </Router> 
  );
}

export default Routes;