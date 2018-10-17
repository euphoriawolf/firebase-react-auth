import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext.jsx';
import * as routes from '../constants/routes';
import SignOutButton from './SignOut';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.landing}> landing</Link>
    </li>
    <li>
      <Link to={routes.home}> Home</Link>
    </li>
    <li>
      <Link to={routes.account}> Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.signIn}> Sign In</Link>
    </li>
    <li>
      <Link to={routes.landing}> landing</Link>
    </li>
  </ul>
);

export default Navigation;
