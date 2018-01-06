import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { firebase } from './Config/Firebase'

import Navigation from './layout/navigation';
import LandingPage from './layout/Landing';
import SignUpPage from './layout/SignUp';
import SignInPage from './layout/SignIn';
import PasswordForgetPage from './layout/PasswordForget';
import HomePage from './layout/Home';
import AccountPage from './layout/Account';

import * as routes from './routes';

import withAuthentication from './Components/withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);
