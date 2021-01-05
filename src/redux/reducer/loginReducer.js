
export const loginReducer = (state = {}, action) => {
   switch (action.type) {
      case 'UI_START_LOADING':
         return {
            ...state,
            loading: true
         };
      case 'UI_FINISH_LOADING':
         return {
            ...state,
            loading: false
         };
      case 'LOGIN':
         return {
            ...state,
            uid: action.payload.uid,
            email: action.payload.email,
         };
      case 'LOGOUT':
         return {};
      default:
         return state;
   }
};
