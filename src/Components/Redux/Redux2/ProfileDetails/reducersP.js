const initialStateP={
    profile1:{
        name:"hello",
        email:"hello@gmail.com",
        mobile:12345
    }
}

const profileReducer=(state=initialStateP, action)=>{
    switch(action.type){
        case "PROFILE_UPDATE_IN_REDUCER":
            return{...state, profile1:action.payload}
        default:
            return state;
    }
}

export default profileReducer;