import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CitaDetail from "../components/cita-detail";
import CitaEdit from "../components/cita-edit";
import CitaList from "../components/cita-list";
import CitaNew from "../components/cita-new";
import Login from "../components/login";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Logo from "../assets/dog-png.png";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebaseConfig";
import { loginDispatch } from "../redux/actions/login";

const RouteSetup = () => {
  const initialState = {
    isAuth: false,
    loading: true,
  };

  const [authState, setAuthState] = useState(initialState);

  const dispatch = useDispatch();

  useEffect( () => {
    firebase.auth().onAuthStateChanged((user) => {
       let auth = false;
      if (user?.uid) {
         console.log('logueado 1c!');
        dispatch(loginDispatch(user.uid, user.email));
        auth = true;
      } else {
         console.log('no logueado!');
         auth = false
      }

      setAuthState(state => {console.log(state); return { ...state, isAuth: auth, loading: false}});
    });
  }, []);

  if (authState.loading)
  {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
        <img
          src={Logo}
          style={{ width: "150px" }}
          alt="logo"
          className="logo"
        />
        <h2 className="text-center my-3">Cargando....</h2>
        <div className="progress" style={{ width: "50%" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={Login}
          isAuth={authState.isAuth}
        ></PublicRoute>
        <PrivateRoute
          exact
          path="/citas"
          component={CitaList}
          isAuth={authState.isAuth}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/cita/nueva"
          component={CitaNew}
          isAuth={authState.isAuth}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/cita/detalle/:id"
          component={CitaDetail}
          isAuth={authState.isAuth}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/cita/editar/:id"
          component={CitaEdit}
          isAuth={authState.isAuth}
        ></PrivateRoute>
        <PublicRoute path="" component={Login} isAuth={authState.isAuth}></PublicRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default RouteSetup;
