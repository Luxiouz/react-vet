import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerCitas } from "../../redux/actions/citas";

const CitaList = () => {
  const dispatch = useDispatch();
  const { listaCitas, deleteOk } = useSelector((state) => state.citas);

  useEffect(()=>{
      dispatch(obtenerCitas());
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {listaCitas.map((cita) => {
            return (
              <tr>
                <td>cita.ownerName</td>
                <td>cita.petName</td>
                <td>cita.Service</td>
                <td>cita.date</td>
                <td>cita.hour</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CitaList;
