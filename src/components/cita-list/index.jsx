import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eliminarCita, obtenerCitas } from "../../redux/actions/citas";

const CitaList = () => {
  const dispatch = useDispatch();
  const { listaCitas, deleteOk } = useSelector((state) => state.citas);

  useEffect(() => {
    dispatch(obtenerCitas());
  }, []);

  const deleteCita = (id)=>{
     dispatch(eliminarCita(id));
  }

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
          {listaCitas.map((cita) => {
            console.log(cita);
            return (
              <tr>
                <td>{cita.ownerName}</td>
                <td>{cita.petName}</td>
                <td>{cita.Service}</td>
                <td>{cita.date}</td>
                <td>{cita.hour}</td>
                <td className="d-flex justify-content-end">
                  <button className="my-0 btn btn-success">Ver detalle</button>
                  <button className="my-0 mx-2 btn btn-warning" onClick={deleteCita(cita.id)}>Editar</button>
                  <button className="my-0 btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CitaList;
