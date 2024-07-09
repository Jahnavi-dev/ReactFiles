

const initialStateUser={
    user:{
        username:"abc",
        useremail:"abc@gmail.com",
        userpassword:"12345"    
    }
}

const userReducer=(state=initialStateUser, action)=>{
    switch(action.type){
        case "USER_UPDATE":
            return{...state, user:action.payload}
        default: return state
    }
}

export default userReducer