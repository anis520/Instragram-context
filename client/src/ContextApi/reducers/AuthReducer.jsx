


/// create a reducer

const AuthReucer=(state,{type,payload})=>{

 
switch (type) {
    case 'USER_LOGIN_SUCCESS':
        
         return {


            isUserLoggedIn:true,
            user:payload
         }
    case 'USER_LOGOUT':
        
         return {


            isUserLoggedIn:false,
            user:{}
         }

    default:
        return state
}



}






export default AuthReucer