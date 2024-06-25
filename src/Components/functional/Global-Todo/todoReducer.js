const initialState={
    todoList:[]
}

export default initialState;

export const ReducerFun=(state,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todoList:[...state.todoList, action.payload]
            }
        case "REMOVE_TODO":
            console.log(action.payload, "ReducerFun")
            const newTodoList=state.todoList.filter((eachTodo, index)=>{
                if(index!==action.payload){
                    return eachTodo                                  
                }
            })
            return({...state,todoList:newTodoList})

        case "UPDATE_TODO":
            console.log(action.payload, "ReducerFun")
            const updatedTodoList=state.todoList.map((eachTodo, index)=>{
                if(index===action.payload){
                    return action.payload1                              
                }
                else{
                    return eachTodo
                }
            })
            return({...state,todoList:updatedTodoList})

        default: return state
    }
        
}
