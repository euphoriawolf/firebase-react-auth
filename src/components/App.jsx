import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './containers/Navigation';
import LandingPage from '../screens/Landing';
import SignUpPage from '../screens/SignUp';
import SignInPage from '../screens/SignIn';
import PasswordForgetPage from '../screens/PasswordForget';
import HomePage from '../screens/Home';
import AccountPage from '../screens/Account';

//h.o.c with Authentication
import withAuthentication from '../utils/withAuthentication';

import * as routes from '../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />

      <Route exact path={routes.signUp} component={() => <SignUpPage />} />
      <Route exact path={routes.landing} component={() => <LandingPage />} />
      <Route exact path={routes.signIn} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.passwordForget}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.home} component={() => <HomePage />} />
      <Route exact path={routes.account} component={() => <AccountPage />} />
    </div>
  </Router>
);

export default withAuthentication(App);
