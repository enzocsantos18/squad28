import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CadastroResponsavel from "./pages/CadastroResponsavel";
import DetalheLista from "./pages/DetalheLista";
import AreaResponsavel from "./pages/AreaResponsavel";
import DetalheListaResponsavel from "./pages/DetalheListaResponsavel";
import AreaLoja from "./pages/AreaLoja";
import Auth from './services/auth';
import Oficial from "./pages/Oficial";

const RotaResponsavel = (props) => {
  if (!Auth.hasToken() || !Auth.isParent()) {
    const component = () => (
      <Redirect
        to={{ pathname: "/login", state: { from: props.location } }}
      />
    );
    return <Route {...props} component={component} />;
  }

  return (
        <Route {...props} />
  );
};

const RotaLoja = (props) => {
  if (!Auth.hasToken() || Auth.isParent()) {
    const component = () => (
      <Redirect
        to={{ pathname: "/login", state: { from: props.location } }}
      />
    );
    return <Route {...props} component={component} />;
  }

  return (
      <Route {...props} />
  );
};


function Routes() {
  useEffect(() => {
    Auth.destroyToken();
  }, [])
  return (
    <Router> 
      <Switch>
        <Route path="/cadastroResponsavel" component={CadastroResponsavel} />
        <Route path="/" exact component={Home} />
        <Route path="/oficial" component={Oficial} />
        
        <Route path="/lista/:id" component={DetalheLista} />

        <RotaLoja path="/areaLoja" component={AreaLoja} />
        <RotaResponsavel path="/areaResponsavel" exact component={AreaResponsavel} />
        <RotaResponsavel
          path="/areaResponsavel/lista/:id"
          component={DetalheListaResponsavel}
        />
        <Route path="/login" component={Login} />
        <Route path="" component={Home} />

        

      </Switch>
    </Router>
  );
}

export default Routes;
