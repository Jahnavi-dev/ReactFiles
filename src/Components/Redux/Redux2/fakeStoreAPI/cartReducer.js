
const cartInitialState={
    cart: []
}


const CartReducer=(state=cartInitialState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const getProduct=action.payload;
            return {...state, cart:[...state.cart,getProduct]}
        case "DELETE_FROM_CART":
            const getTargetId=action.payload
            const newCart=state.cart.filter(eachItem=>eachItem.id!==getTargetId)
            return{...state, cart:newCart} 
        default:
            return state
    }
}

export default CartReducer;