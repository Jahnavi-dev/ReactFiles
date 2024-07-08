const initialState1={
    books:100,
    profileName:""
}


const bookReducer1=(state=initialState1, action)=>{
    switch (action.type) {
        case "BUY_BOOK":
            return {...state, books:state.books-1}
        case "RETURN_BOOK":
            return {...state, books:state.books+1}
        case "CHANGE_PROFILE_NAME":
            console.log(action.payload, "in Reducer")
            return  {...state, profileName:action.payload}
        default:
            return state;
    }
}

export default bookReducer1