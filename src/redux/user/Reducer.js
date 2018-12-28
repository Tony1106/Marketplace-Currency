import { getType } from "typesafe-actions";
import * as A from "./Action";
import {getUserToLocalStorage, clearLocalStorage} from '../../config/localStorage/Authentication'
const userData = localStorage.getItem('UserData');
let userProfile;
let isLoggedIn = false;
if(userData){
  userProfile = getUserToLocalStorage(userData)
  isLoggedIn= true;
} else{
  userProfile = {
    displayName: "test",
    avatar: "",
    uid: "",
    email: "",
    phoneNumber: ""
  }
}
const initState = {
  isLoggedIn,
  isLoading: false,
  userProfile,
  
};



const user = (state = initState, action) => {


  const userData = action.payload ? action.payload.user : null;
  const userProfile = userData
    ? {
        displayName: userData.displayName || '',
        avatar: userData.avatar|| '',
        uid: userData.uid||'',
        email: userData.email,
        phoneNumber: userData.phoneNumber
      }
    : null;

    
  switch (action.type) {
    case getType(A.loginWithEmailAndPassword.success):
     
      localStorage.setItem('UserData', JSON.stringify(userProfile));
      return {
        ...state,
        userProfile,
        isLoggedIn: true
      };
    case getType(A.loginWithEmailAndPassword.failure):
      console.log("Login fail");

      return {
        ...state,
        isLoggedIn: false
      };
    case getType(A.signUpWithEmailAndPassword.success):
      console.log("Sign up success");
      localStorage.setItem('UserData', JSON.stringify(userProfile));
      return {
        ...state,
        userProfile,
        isLoggedIn: true
      };
    case getType(A.signUpWithEmailAndPassword.failure):
      console.log("Signup fail");

      return {
        ...state,
        isLoggedIn: false
      };
    case getType(A.logOut.success):
    console.log('sign out success');
    clearLocalStorage();
    return {
      ...state,
      isLoggedIn: false
    };
    default:
      return state;
  }
};

export default user;
