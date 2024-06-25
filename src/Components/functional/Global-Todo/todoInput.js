import React, { useContext } from "react"
import TodoNav from "./todoNav";
import { TodoInfo } from "./todoRout";
import "./todo.css"

const TodoInput=()=>{
    const {currectSate, addTodo, removeTodo}=useContext(TodoInfo)
    console.log(currectSate, "In TodoInput page")

    const enterAction=()=>{
        let inputEle=document.getElementById("inputEle")
        addTodo(inputEle.value)
        inputEle.value="";
    }

    const deleteAction=(index)=>{
        console.log(index, "In todoInput-deleteAction")
        removeTodo(index)
    }

    return(
        <React.Fragment>
            <TodoNav/>
            <div className="main_cont">
            <h3>TodoInput</h3>
            <input type="text" id="inputEle"  className="inputEleStyle" placeholder="Prepare your TodoList"/>
            <button className="Enter" onClick={enterAction}>Enter</button>
            <ol className="list_cont">
                {currectSate.todoList.length===0?
                 <p>No Todos</p>:
                 currectSate.todoList.map((eachTodo, index)=>{
                    return(<li key={index} className="liEle">
                        <div className="flex_cont">
                            <span>{eachTodo}</span>
                            <button className="listBtns" onClick={()=>deleteAction(index)}>Delete</button>
                        </div>
                        </li>)
                 })
                 }
            </ol>
            </div>
        </React.Fragment>
    )
}
export default TodoInput;