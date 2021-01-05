import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerCita } from "../../redux/actions/citas";

const CitaDetail = (props) => {
  const dispatch = useDispatch();
  const { cita } = useSelector((state) => state.citas);

  useEffect(() => {
    dispatch(obtenerCita(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const regresar = () => {
    props.history.push("/citas");
  };

  return (
    <div>
      <h2 className="my-3 text-center">
        <strong>Detalle de Cita</strong>
      </h2>
      {Object.keys(cita).length > 0 ? (
        <div>
          <div className="d-flex justify-content-start align-items-end">
            <p className="m-0 me-3">
              <b>Cliente: </b>
            </p>
            <p className="m-0">{cita.ownerName}</p>
          </div>
          <div className="d-flex justify-content-start align-items-end">
            <p className="m-0 me-3">
              <b>Mascota: </b>
            </p>
            <p className="m-0">{cita.petName}</p>
          </div>
          <div className="d-flex justify-content-start align-items-end">
            <p className="m-0 me-3">
              <b>Correo: </b>
            </p>
            <p className="m-0">{cita.email}</p>
          </div>
          <div className="d-flex justify-content-start align-items-end">
            <p className="m-0 me-3">
              <b>Servicio: </b>
            </p>
            <p className="m-0">{cita.service.label}</p>
          </div>
          <div className="d-flex justify-content-start align-items-end">
            <p className="m-0 me-3">
              <b>Fecha: </b>
            </p>
            <p className="m-0">{cita.date}</p>
          </div>
          <div className="d-flex justify-content-start align-items-end">
            <p className="m-0 me-3">
              <b>Hora: </b>
            </p>
            <p className="m-0">{cita.hour}</p>
          </div>
          <div className="d-flex justify-content-start align-items-end">
            <p className="m-0 me-3">
              <b>Observaciones: </b>
            </p>
            <p className="m-0">{cita.description?cita.description:"ninguna"}</p>
          </div>
        </div>
      ) : (
        <h3>Cargando...</h3>
      )}

      <button className="btn btn-primary" onClick={() => regresar()}>
        Regresar
      </button>
    </div>
  );
};

export default CitaDetail;
