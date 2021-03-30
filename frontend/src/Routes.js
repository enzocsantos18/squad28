import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import DashboardStore from './pages/DashboardStore';
import DetalheLista from './pages/DetalheLista';
import AreaResponsavel from './pages/AreaResponsavel';
import DetalheListaResponsavel from './pages/DetalheListaResponsavel';


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lista/:id" component={DetalheLista} />

        <Route path="/dashboard/store" component={DashboardStore}/>
        <Route path="/areaResponsavel" exact component={AreaResponsavel}/>
        <Route path="/areaResponsavel/lista/:id" component={DetalheListaResponsavel}/>
        <Route path="/login" component={Login}/>
        <Route path="" component={Home}/>
      </Switch>
    </Router> 
  );
}

export default Routes;