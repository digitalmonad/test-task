import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { GoogleAuthProvider } from "./components/utils/context/authContext";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { Navigation } from "./components/Navigation";
import { PrivateRoute } from "./components/router/PrivateRoute";
import { ProfileScreen } from "./screens/ProfileScreen";
import React from "react";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <GoogleAuthProvider>
        <Router>
          <Navigation />
          <div className={styles.appContent}>
            <Switch>
              <Route exact path={"/"} component={HomeScreen} />
              <Route exact path={"/login"} component={LoginScreen} />
              <PrivateRoute component={ProfileScreen} />
            </Switch>
          </div>
        </Router>
      </GoogleAuthProvider>
    </div>
  );
};

export default App;
