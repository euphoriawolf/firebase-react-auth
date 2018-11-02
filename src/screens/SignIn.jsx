import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import { auth } from '../utils/firebase';
import { PasswordForgetLink } from '../components/containers/PasswordForget';
import { SignUpLink } from './SignUp';

const SignInPage = ({ history }) => (
  <div>
    <h1> Sign In </h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const initialState = {
  email: '',
  password: '',
  error: null
};
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignInForm extends Component {
  state = { ...initialState };
  onSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...initialState });
        history.push(routes.home);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = email === '' || password === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event =>
            this.setState(byPropKey('email', event.target.value))
          }
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={event =>
            this.setState(byPropKey('password', event.target.value))
          }
          type="password"
          placeholder="password"
        />

        <button disabled={isInvalid} type="submit">
          {' '}
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);
export { SignInForm };
