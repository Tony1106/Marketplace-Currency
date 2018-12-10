import {getType} from 'typesafe-actions'
import * as A from './Action'
const initState = {
    user:{
        isAuth: false,
        userName: '',
        avatar:'',
        uid: ''
    }
}


const user = (state=initState, action)=>{
    console.log(action, 'action');
    console.log(getType(A.loginWithEmailAndPassword.success), 'get action');
    switch (action.type ){
        case getType(A.loginWithEmailAndPassword.success):
        console.log('login success');
 
        return{
            ...state,
            isLoggedIn:true,
        }
        case getType(A.loginWithEmailAndPassword.failure):
        console.log('Login fail');
        
        return {
            ...state,
            isLoggedIn:false,
        }
        case getType(A.signUpWithEmailAndPassword.success):
        console.log('Sign up success');
 
        return{
            ...state,
            isLoggedIn:true,
        }
        case getType(A.signUpWithEmailAndPassword.failure):
        console.log('Signup fail');
        
        return {
            ...state,
            isLoggedIn:false,
        }
        default:
            return state
    }

}

export default user;