import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./../../pages/Login";
import ApplicantForm from "./../../pages/ApplicantForm";
import UpdateForm from "./../../pages/UpdateForm";
import UpdateAlarm from "./../../pages/UpdateAlarm";
import EmptyPage from "./../../pages/EmptyPage";
import ApplicantTablePage from "./../../pages/ApplicantTablePage";
import createDataBase from "./../../pages/createDataBase";
import createAlarm from "./../../pages/createAlarm";

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...rest} /> : <Redirect to="/Empty" />
    }
  />
);

const Routes = ({ authed, handleChangeState }) => (
  <Switch>
    <PublicRoute
      authed={authed}
      exact
      path="/registre"
      component={ApplicantForm}
    />
    <PublicRoute
      path="/"
      authed={authed}
      handleChangeState={handleChangeState}
      exact
      component={Login}
    />
    <PrivateRoute
      authed={authed}
      exact
      path="/createDataBase"
      component={createDataBase}
    />
    <PrivateRoute
      authed={authed}
      exact
      path="/createAlarm"
      component={createAlarm}
    />    
    <PrivateRoute
      authed={authed}
      exact
      path="/UpdateAplicant/:id"
      component={UpdateForm}
    />
    <PrivateRoute
      authed={authed}
      exact
      path="/UpdateAlarm/:id"
      component={UpdateAlarm}
    />
    <PrivateRoute path="/Empty" authed={authed} exact component={EmptyPage} />
    <PrivateRoute
      path="/ApplicantTable"
      authed={authed}
      exact
      component={ApplicantTablePage}
    />
  </Switch>
);

export default Routes;
