import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eliminarCita, obtenerCitas } from "../../redux/actions/citas";
import CitaRow from "../cita-row";

const CitaList = () => {
  const dispatch = useDispatch();
  const { listaCitas, deleteOk } = useSelector((state) => state.citas);

  useEffect(() => {
    dispatch(obtenerCitas());
  }, []);

  useEffect(() => {
   if (deleteOk) {
     dispatch(obtenerCitas());
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [deleteOk]);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">Mascota</th>
            <th scope="col">Servicio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listaCitas.map((cita) => 
            <CitaRow cita={cita} key={cita.id}></CitaRow>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CitaList;
