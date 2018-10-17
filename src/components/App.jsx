import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

//h.o.c with Authentication
import withAuthentication from './withAuthentication';

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
