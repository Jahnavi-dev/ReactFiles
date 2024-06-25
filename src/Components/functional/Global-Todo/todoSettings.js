import React, { useContext } from "react"
import TodoNav from "./todoNav";
import { TodoInfo } from "./todoRout";
const TodoSettings=()=>{
    const {currectSate, removeTodo, updateTodo}=useContext(TodoInfo)

    const deleteInTodoSettings=(index)=>{
        removeTodo(index)
    }
    const updateInTodoSettings=(index)=>{
        const inputEle1=document.getElementById("inputEle1")
        const value=inputEle1.value
        updateTodo(index,value)
    }
    return(
        <React.Fragment>
            <TodoNav/>
            <div className="main_cont">
            <h2>TodoSettings</h2>
            <input type="text" id="inputEle1"  className="inputEleStyle" placeholder="Prepare your TodoList"/>
            <ol className="list_cont">
                {currectSate.todoList.length===0?
                 <p>No Todos</p>:
                 currectSate.todoList.map((eachTodo, index)=>{
                    return(<li key={index} className="liEle">
                        <div className="flex_cont">
                            <span>{eachTodo}</span>
                            <button className="listBtns" onClick={()=>deleteInTodoSettings(index)}>Delete</button>
                            <button className="listBtns" onClick={()=>updateInTodoSettings(index)}>Update</button>
                        </div>
                        </li>)
                 })
                 }
            </ol>
            </div>
        </React.Fragment>
    )
}
export default TodoSettings;