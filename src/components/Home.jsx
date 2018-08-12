import React from "react";
import withAuthorization from "./withAuthorixation";

const HomePage = () => (
  <div>
    <h1> Home Page </h1>
    <p>The home page is accessible by every user</p>
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
