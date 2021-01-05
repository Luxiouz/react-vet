import { firebase } from '../../firebase/firebaseConfig'
import { finishLoadingUI, startLoadingUI } from './ui';

export const login = (email, password) => {

   return async (dispatch) => {
      dispatch(startLoadingUI);
      try {
         const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
         console.log(user);
         dispatch(loginDispatch(user.uid, user.email));
         dispatch(finishLoadingUI);
      } catch (error) {
         console.log(error);
         dispatch(finishLoadingUI);
      }
   };

};

export const logoutAction = ()=>{
   return async (dispatch) => {
      dispatch(startLoadingUI);
      try {
         await firebase.auth().signOut();
         dispatch(logoutDispatch);
      } catch (error) {
         console.log(error);
      }
   };
}

export const loginDispatch = (uid, email) => {
   return {
      type: "LOGIN",
      payload: { uid, email },
   }
}

export const logoutDispatch = () => {
   return {
      type: "LOGOUT",
   }
}