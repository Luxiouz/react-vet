import { db } from '../../firebase/firebaseConfig'

export const obtenerCitas = () => {
  return async (dispatch) => {
    try {
      const doc = await db.collection('citas').get();
      //const resultado = await axios.get('http://localhost:4000/restaurant');
      console.log('resultado es:');
      console.log(doc);

      let citas = [];

      doc.forEach((item) => {
        citas.push({
          ...item.data(),
          id: item.id,
        })
      });
      console.log('citas es:');
      console.log(citas);


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
      const doc = await db.collection('citas').doc(id).get();
      /*const resultado = await axios.get(
        'http://localhost:4000/restaurant?id=' + id
      );*/

      const item = {
        ...doc.data(),
        id: doc.id,
      };

      dispatch({
        type: 'OBTENER_CITA',
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editarCita = (cita) => {
  return async (dispatch) => {
    try {
      const citaUpdate = { ...cita };
      delete citaUpdate.id;
      await db.collection('citas').doc(cita.id).update(citaUpdate);
      /*await axios.put('http://localhost:4000/restaurant/' + cita.id, {
        ...cita,
      });*/
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
      await db.collection('citas').doc(id).delete();
      //await axios.delete('http://localhost:4000/restaurant/' + id);
      dispatch({
        type: 'ELIMINAR_CITA',
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
