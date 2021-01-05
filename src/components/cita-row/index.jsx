import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eliminarCita } from "../../redux/actions/citas";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

const CitaRow = ({ cita }) => {
  const dispatch = useDispatch();
  const { deleteOk } = useSelector((state) => state.citas);

  const history = useHistory();

  const deleteCita = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Se eliminará la cita',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      denyButtonText: `Cancelar`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         console.log("eliminando...");
         dispatch(eliminarCita(cita.id));
      } 
    })

    
  };

  const editCita = (e) => {
    e.preventDefault();
    console.log("editando...");
    history.push("/cita/editar/"+cita.id);
  };

  const detailCita = (e) => {
    e.preventDefault();
    console.log("consultando...");
  };

  return (
    <tr key={cita.id}>
      <td>{cita.ownerName}</td>
      <td>{cita.petName}</td>
      <td>{cita.service.label}</td>
      <td>{cita.date}</td>
      <td>{cita.hour}</td>
      <td className="d-flex justify-content-end">
        <button className="my-0 btn btn-success" onClick={detailCita}>
          Ver detalle
        </button>
        <button className="my-0 mx-2 btn btn-warning" onClick={editCita}>
          Editar
        </button>
        <button className="my-0 btn btn-danger" onClick={deleteCita}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CitaRow;
