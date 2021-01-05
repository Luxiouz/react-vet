import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarCita, obtenerCita } from "../../redux/actions/citas";
import FormDate from "../form-date/FormDate";

const CitaEdit = (props) => {
  const dispatch = useDispatch();
  const { cita, editOk } = useSelector((state) => state.citas);

  useEffect(() => {
   dispatch(obtenerCita(props.match.params.id));
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

  useEffect(() => {
    if (editOk) {
      props.history.push("/citas");
    }
  }, [editOk]);

  const editar = (updatedCita) => {
    console.log("dispatching editar cita");
    dispatch(editarCita(updatedCita));
  };

  return (
    <div>
      <h2 className="my-3">Agregar nueva cita</h2>
      { Object.keys(cita).length>0 && <FormDate cita={cita} submitCallback={editar} type={"edit"} />}
    </div>
  );
};

export default CitaEdit;