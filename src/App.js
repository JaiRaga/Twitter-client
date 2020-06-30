import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import ProfileContainer from "./component/profile/ProfileContainer";
import Dashboard from "./component/dashboard/Dashboard";
import Profiles from "./component/Profiles/Profiles";
import Profile from "./component/profile/Profile";

// Redux
import store from "./Redux/store";
import { loadUser } from "./Redux/actions/auth";

// utils
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />

          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/profile' component={ProfileContainer} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/profiles' component={Profiles} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
