import { getType } from "typesafe-actions";
import * as A from "./Action";
const initState = {
  isLoggedIn: false,
  isLoading: false,
  userProfile: {
    displayName: "test",
    avatar: "",
    uid: "",
    email: "",
    phoneNumber: ""
  }
};

const user = (state = initState, action) => {
  console.log(action, "action");
  console.log(getType(A.loginWithEmailAndPassword.success), "get action");
  const userData = action.payload ? action.payload.user : null;
  const userProfile = userData
    ? {
        displayName: userData.displayName,
        avatar: userData.avatar,
        uid: userData.uid,
        email: userData.email,
        phoneNumber: userData.phoneNumber
      }
    : null;
    console.log(userProfile, 'userProfile');
    
  switch (action.type) {
    case getType(A.loginWithEmailAndPassword.success):
      console.log("login success");

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
    default:
      return state;
  }
};

export default user;
