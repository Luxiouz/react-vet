import axios from 'axios';
import {db} from '../../firebase/firebaseConfig'

export const obtenerCitas = () => {
  return async (dispatch) => {
    try {
      const resultado = await db.collection('citas').get();
      //const resultado = await axios.get('http://localhost:4000/restaurant');
      console.log('resultado es:');
      console.log(resultado);

      let citas = [];
     // citas = resultado.map(item => {return {...item.data, id: item.id}});

      dispatch({
        type: 'OBTENER_CITAS',
        payload: citas,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const agregarCita = (cita) => {
  return async (dispatch) => {
    try {
      await db.collection('citas').add(cita);
      //await axios.post('http://localhost:4000/restaurant', cita);
      dispatch({
        type: 'AGREGAR_CITA',
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtenerCita = (id) => {
  return async (dispatch) => {
    try {
      const resultado = await axios.get(
        'http://localhost:4000/restaurant?id=' + id
      );
      dispatch({
        type: 'OBTENER_CITA',
        payload: resultado.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editarCita = (cita) => {
  return async (dispatch) => {
    try {
      await axios.put('http://localhost:4000/restaurant/' + cita.id, {
        ...cita,
      });
      dispatch({
        type: 'EDITAR_CITA',
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarCita = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete('http://localhost:4000/restaurant/' + id);
      dispatch({
        type: 'ELIMINAR_CITA',
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
