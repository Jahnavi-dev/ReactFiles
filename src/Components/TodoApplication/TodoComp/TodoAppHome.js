import React, { useEffect } from "react"
import TodoAppNavbar from "./TodoAppNav";
import "./TodoStyles.css"
import {useDispatch, useSelector} from "react-redux"
import { AddAction, DelAction } from "../TodoRedux/TodoAction";
import { useNavigate } from "react-router-dom";

const TodoAppHome=()=>{
    const {todo}=useSelector(state=>state)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const AddTrigger=()=>{
        let value=document.getElementById("textInput").value
        dispatch(AddAction(value))
        document.getElementById("textInput").value=""
    } 

    const DeleteTrigger=(deleteId)=>{
        dispatch(DelAction(deleteId))
    }

    const goToTodoDetailedItem = () => {
        navigate('/Todo/:id');
      };

    return(
        <React.Fragment>
            <TodoAppNavbar/>
            <div className="main_Cont">
                <div>
                    <input type="type" placeholder="Prepare your Todolist" id="textInput"/>
                    <button className="AddTodoBtn" onClick={AddTrigger}>Add Todo</button>
                </div>
                <div className="todo_sub_main_cont">
                    {todo.map((eachTodo)=>{
                        return(
                            <div key={eachTodo.id} className="eachtodo_cont">
                                        <span onClick={()=>goToTodoDetailedItem(eachTodo.id)}>{eachTodo.todo}</span>
                                        <button className="delBtnStyle" onClick={()=>DeleteTrigger(eachTodo.id)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>    
        </React.Fragment>
    )
}

export default TodoAppHome;