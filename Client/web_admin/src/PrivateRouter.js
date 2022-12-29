import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let isAdmin = 0;


  return (
    <Route
      {...rest}
      component={(props) => {
        if (userInfo) {
          //If page is on home page with only / then redirect to dashboard route
          return (props.location.pathname === '/') ?
            <Redirect to={`/dashboard`} /> :
            <Component {...props} />;
        } else {
          return <Redirect to={`/login`} />;
        }
      }}
    />
  );
}

export default PrivateRouter;
