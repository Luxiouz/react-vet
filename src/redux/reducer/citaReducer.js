const initState = {
   listaCitas: [],
   cita: {},
   addOk: false,
   editOk: false,
   deleteOk: false,
 };
 export const citaReducer = (state = { ...initState }, action) => {
   switch (action.type) {
     case 'OBTENER_CITAS':
       return {
         ...state,
         listaCitas: action.payload,
         cita: {},
         addOk: false,
         editOk: false,
         deleteOk: false,
       };
     case 'OBTENER_CITA':
       return {
         ...state,
         cita: action.payload,
       };
     case 'AGREGAR_CITA':
       return {
         ...state,
         addOk: action.payload,
       };
     case 'EDITAR_CITA':
       return {
         ...state,
         editOk: action.payload,
       };
     case 'ELIMINAR_CITA':
       return {
         ...state,
         deleteOk: action.payload,
       };
     default:
       return state;
   }
 };
 