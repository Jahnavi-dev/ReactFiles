export const AddAction=(todoName)=>{
    return{
        type:"ADD_TODO",
        payload:todoName
    }
}


export const DelAction=(todoId)=>{
    return{
        type:"DELETE_TODO",
        payload:todoId
    }
}