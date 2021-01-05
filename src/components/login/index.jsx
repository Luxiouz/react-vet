import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/dog-png.png";
import { login } from "../../redux/actions/login";
import "./index.css";

const Login = () => {

  const dispatch = useDispatch();
  const state = useSelector((state)=> state);
  const {uid, email} = state.login;

  const initialState = {
    email: "usuario@correo.com",
    password: "123456",
  };
  const [loginState, setLoginState] = useState(initialState);

  const handleInputChange = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Login data");
    console.log(loginState);

    dispatch(login(loginState.email, loginState.password));
  };

  return (
    <div className="global-container mt-5">
      <div className="card login-form">
        <div className="card-body">
          <div className="text-center mb-3">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <h3 className="card-title text-center">Veterinaria Guau Guau</h3>
          <div className="card-text">
            <form onSubmit = {handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Usuario</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  value={loginState.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                  name="password"
                  value={loginState.password}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
