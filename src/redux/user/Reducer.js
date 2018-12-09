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
    
    return state
}

export default user;