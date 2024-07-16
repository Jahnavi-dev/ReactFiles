import axios from 'axios'; 

export const ProductCallActionCreator=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"PRODUCTS_RETRIEVE_LOADING"})
            const response=await axios.get("https://fakestoreapi.com/products")
            dispatch({type:"PRODUCTS_RETRIEVE_SUCCESS", payload:response.data})
        }
        catch(err){
            dispatch({type:"PRODUCTS_RETRIEVE_ERROR"})
        }
    }
}