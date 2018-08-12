import React from "react";
import { firebase } from "../firebase";
import * as routes from "../constants/routes";
import AuthUserContext from "./AuthUserContext";
import { withRouter } from "react-router-dom";

const withAuthorization = authCondition => Component => {
  class withAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.signIn);
        }
      });
    }
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <Component /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }
  return withRouter(withAuthorization);
};

export default withAuthorization;
