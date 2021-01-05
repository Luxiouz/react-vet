import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from '../../../assets/dog-png.png'
import {firebase} from '../../../firebase/firebaseConfig';
import { logoutAction } from "../../../redux/actions/login";

const Header = () => {
   let title = 'Veterinaria Guau Guau'

   let sectionStyle = {
      width: "60px",
      height: "60px",
      backgroundImage: `url(${Logo})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };

    const dispatch = useDispatch();

    const handleClick = (e)=>{

      e.preventDefault();
      dispatch(logoutAction());
    }
  return (
    <header>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
         <NavLink className="navbar-brand" to="/citas">
            <div className="d-flex justify-content-center align-items-center">
               <div className="me-3" style={sectionStyle}>
               </div>
               <strong>
                  {title}
               </strong>   
            </div>   
         </NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse justify-content-between alig-items-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className="nav-link" to="/citas">Lista de Citas</NavLink>
            <NavLink className="nav-link" to="/cita/nueva">Nueva Cita</NavLink>
            </div>
            <button className="btn btn-warning my-0" onClick={handleClick}>Cerrar Sesión</button>
         </div>
      </div>
      </nav>
    </header>
  );
};

export default Header;
