import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./MyApp.css";
import HeaderPage from "./components/common/HeaderPage";
import FooterPage from "./components/common/FooterPage";
import ManageSignUp from "./components/user/ManageSignUp";
import HomePage from "./components/common/HomePage";
import UserList from "./components/user/UserList";
import UserProfileDetail from "./components/user/UserProfileDetail";

function MyApp() {
  const [isUserLoggedState, setIsUserLoggedState] = useState(false);

  useEffect(() => {
    checkIsUserLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIsUserLoggedIn = () => {
    let _isLoggedInSession = sessionStorage.getItem("isUserLogged");
    if (_isLoggedInSession && !isUserLoggedState)
      setIsUserLoggedState(_isLoggedInSession);
    else if (!_isLoggedInSession && isUserLoggedState)
      setIsUserLoggedState(_isLoggedInSession);
  };

  const handleLoggin = isLogged => {
    setIsUserLoggedState(isLogged);
    sessionStorage.setItem("isUserLogged", isLogged);
  };
  return (
    <div className='app'>
      <HeaderPage />
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <HomePage
              {...props}
              handleLoggin={handleLoggin}
              isUserLogged={isUserLoggedState}
            />
          )}
        />
        <Route
          path='/signup'
          render={props => (
            <ManageSignUp {...props} isUserLogged={isUserLoggedState} />
          )}
        />
        <Route
          path='/userlist'
          render={props => (
            <UserList {...props} isUserLogged={isUserLoggedState} />
          )}
        />
        <Route
          path='/user-detail'
          render={props => (
            <UserProfileDetail {...props} isUserLogged={isUserLoggedState} />
          )}
        />
      </Switch>
      <FooterPage />
    </div>
  );
}

export default MyApp;
