import React, { useEffect, useState } from "react";
import Select from "react-select";

const FormDate = (props) => {
  const initialState = {
    ownerName: "",
    petName: "",
    email: "",
    date: "",
    hour: "",
    service: "",
    description: "",
  };

  const options = [
    { value: "opt1", label: "Consulta Veterinaria" },
    { value: "opt2", label: "Baño Regular" },
    { value: "opt3", label: "Baño Regular y Corte" },
    { value: "opt4", label: "Baño Medicado" },
    { value: "opt5", label: "Baño Medicado y Corte" },
  ];

  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    setFormState({...props.cita});
  }, []);

  useEffect(() => {
    console.log("formState Change:");
    console.log(formState);
  }, [formState]);

  

  const handleInputChange = (e) => {
     if(e.target){
      setFormState({
         ...formState,
         [e.target.name]: e.target.value,
       });
     }
  };

  const handleServiceChange = (service) => {
   setFormState({
      ...formState,
      service: service,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    props.submitCallback(formState)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ownerName">Cliente</label>
          <input
            className="form-control"
            type="text"
            name="ownerName"
            id="ownerName"
            placeholder="Jhon Doe"
            autoComplete="off"
            value={formState.ownerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="petName">Mascota</label>
          <input
            className="form-control"
            type="text"
            name="petName"
            id="petName"
            placeholder="Firulais"
            autoComplete="off"
            value={formState.petName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="jhon@doe.com"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            Nos comunicaremos con el cliente mediante este correo
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="service">Servicio</label>
          <Select
            name="service"
            id="service"
            value={formState.service}
            onChange={handleServiceChange}
            options={options}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Fecha</label>
          <input
            className="form-control"
            type="date"
            name="date"
            id="date"
            placeholder="2021/01/01"
            autoComplete="off"
            value={formState.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="hour">Hora</label>
          <input
            className="form-control"
            type="time"
            name="hour"
            id="hour"
            placeholder="12:00"
            autoComplete="off"
            value={formState.hour}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formState.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="my-3 btn btn-primary">
          {props.type === "register" ? "Registrar" : "Guardar"}
        </button>
      </form>
    </>
  );
};

export default FormDate;
