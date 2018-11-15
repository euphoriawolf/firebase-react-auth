import React from 'react';

import AuthUserContext from '../utils/AuthUserContext';
import { PasswordForgetForm } from '../components/containers/PasswordForget';
import PasswordChangeForm from '../components/containers/PasswordChange';
import withAuthorization from '../utils/withAuthorization';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authConditon = authUser => !!authUser;

export default withAuthorization(authConditon)(AccountPage);
