import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ isAuth, component: Component, ...rest }) => {

  return (
    <>
        <Route
          {...rest}
          component={(props) => 
            isAuth ? <Redirect to="/citas" /> : <Component {...props} /> 
          }
        ></Route>
    </>
  );
};

export default PublicRoute;
