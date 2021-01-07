import { Redirect, Route } from "react-router-dom";

import React from "react";
import { useGoogleAuth } from "../utils/context/authContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isSignedIn } = useGoogleAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};
