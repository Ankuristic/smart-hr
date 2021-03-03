import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../../context/auth_context";
// We will create these two pages in a moment
//Authendication
import LoginPage from "./../authentication/loginpage";

//Error Page
// import Error404 from '../MainPage/Pages/ErrorPage/error404';
// import Error500 from '../MainPage/Pages/ErrorPage/error500';

// import 'Assets/css/font-awesome.min.css';

import $ from "jquery";

export default class App extends Component {
  componentDidMount() {
    if (location.pathname.includes("login")) {
      $("body").addClass("account-page");
    } else if (
      location.pathname.includes("error-404") ||
      location.pathname.includes("error-500")
    ) {
      $("body").addClass("error-page");
    }
  }
  render() {
    const { location, match, user } = this.props;

    // if (location.pathname === '/') {
    // if (user === null) {
    //     return (<Redirect to={'/login'} />);
    // } else {
    //     return (<Redirect to={'/orange/app/main/dashboard'} />);
    // }
    // }
    if (location.pathname === "/") {
      return <Redirect to={"/app/main/dashboard"} />;
    }
    return (
        <AuthProvider>
      <Switch>
        {/* <InitialPath
                    path={`${match.url}app`}
                    // authUser={user}
                    component={DefaultLayout}
                /> */}
        {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} /> */}
        <Route path="/login" component={LoginPage} />
      </Switch>
      </AuthProvider>
    );
  }
}
