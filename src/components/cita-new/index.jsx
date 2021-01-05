import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarCita } from "../../redux/actions/citas";
import FormDate from "../form-date/FormDate";

const CitaNew = (props) => {
  const dispatch = useDispatch();
  const { addOk } = useSelector((state) => state.citas);

  useEffect(() => {
    if (addOk) {
      props.history.push("/citas");
    }
  }, [addOk]);

  const addCita = (cita) => {
    console.log("dispatching nueva cita");
    dispatch(agregarCita(cita));
  };

  return (
    <div>
      <h2 className="my-3">Agregar nueva cita</h2>
      <FormDate submitCallback={addCita} type={"register"} />
    </div>
  );
};

export default CitaNew;
