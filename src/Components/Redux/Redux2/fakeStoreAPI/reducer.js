
const initialStateFakeStore={
    products:[], 
    error:null,
    loading:false
}

const fakeStoreReducer=(state=initialStateFakeStore, action)=>{
    switch(action.type){
        case "PRODUCTS_RETRIEVE_SUCCESS":
            return{...state,products:action.payload, loading:false}
        case "PRODUCTS_RETRIEVE_ERROR":
            return{...state, error:"something went wrong"}
        case "PRODUCTS_RETRIEVE_LOADING":
            return{...state, loading:true}
        default:
            return state
    }
}

export default fakeStoreReducer