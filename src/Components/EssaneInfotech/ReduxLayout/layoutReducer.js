
const initialState=[]

const LayoutReducer=(state=initialState, action)=>{
    switch(action.type){
        case "GET_DATA":
            const APIdata=action.payload
            const newState=[...state,APIdata]
            console.log(newState, "inReducer")
            return newState
        default:
            return state
    }

}

export default LayoutReducer;