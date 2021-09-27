import React from "react";
import { Route, Redirect } from "react-router-dom";
import Topnav from "../navigation/Topnav";
import styles from './auth.module.css'
// import auth from "./auth";

export const ProtectedRoute = ({
  component,
  hideTopNav,
  ...rest
}) => {
  let Component = component;
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          // alert(localStorage.getItem("token"))
        //   if(localStorage.getItem('user')){
            return <div className = {styles.main}>
              {hideTopNav?null:<Topnav />}
              <Component {...props} />
              </div>;
        //   }
          // else{

          // }
          
        }
        //  else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        // }
      }}
    />
  );
};