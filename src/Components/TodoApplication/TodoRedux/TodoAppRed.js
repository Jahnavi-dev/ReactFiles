const initialState=[
    {userId:1, id:1, todo:"HTML",status:false}, 
    {userId:1, id:2, todo:"CSS",status:false},
    {userId:1, id:3, todo:"JS",status:false},
    {userId:1, id:4, todo:"React",status:false},
    // {userId:1, id:5, todo:"ReactNative",status:false},
    // {userId:1, id:6, todo:"AngularJS",status:false},
    // {userId:1, id:7, todo:"VueJS",status:false},
    // {userId:1, id:8, todo:"NextJS",status:false}
]

const TodoAppReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const todo=action.payload 
            const newTodo={userId:1, id:state.length+1, todo:todo, status:false}
            return [...state, newTodo]
        case "DELETE_TODO":
            const delete_todo_id=action.payload;
            const filterdTodo=state.filter(eachTodo=>eachTodo.id!==delete_todo_id)
            return filterdTodo
        default:
            return state
    }
}

export default TodoAppReducer