import React, { useContext } from "react"
import TodoNav from "./todoNav";
import { TodoInfo } from "./todoRout";
import "./todo.css"

const TodoList=()=>{
    const {currectSate, removeTodo}=useContext(TodoInfo)
    const deleteInTodoList=(index)=>{
        removeTodo(index)
    }
    return(
        <React.Fragment>
            <TodoNav/>
            <div className="main_cont">
            <h2>TodoList</h2>
            <ol className="list_cont">
                {currectSate.todoList.length===0?
                 <p>No Todos</p>:
                 currectSate.todoList.map((eachTodo, index)=>{
                    return(<li key={index} className="liEle">
                        <div className="flex_cont">
                            <span>{eachTodo}</span>
                            <button className="listBtns" onClick={()=>deleteInTodoList(index)}>Delete</button>
                        </div>
                        </li>)
                 })
                 }
            </ol>
            </div>
        </React.Fragment>
    )
}
export default TodoList;