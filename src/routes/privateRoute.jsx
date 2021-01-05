import React from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "../components/structure/header";

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <>
      <Header />
      <main className="container">
        <Route
          {...rest}
          component={(props) => 
            isAuth ? <Component {...props} /> : <Redirect to="/" />
          }
        ></Route>
      </main>
    </>
  );
};

export default PrivateRoute;
