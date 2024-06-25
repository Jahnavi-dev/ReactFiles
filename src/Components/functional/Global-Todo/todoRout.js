import React, { createContext, useReducer } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoInput from "./todoInput";
import TodoList from "./todolist";
import TodoSettings from "./todoSettings";
import initialState, { ReducerFun } from "./todoReducer";


export const TodoInfo=createContext()
const TodoRouting=()=>{
    const [currectSate, dispatch]=useReducer(ReducerFun, initialState)
    console.log(currectSate, "In TodoRouting page")

    const addTodo=(todo)=>{
        dispatch({
            type:"ADD_TODO",
            payload:todo
        })
    }
    const removeTodo=(index)=>{
        console.log(index, "In todoRout-removeTodo")
        dispatch({
            type:"REMOVE_TODO",
            payload:index
        })
    }

    const updateTodo=(index, updatingTodo)=>{
        console.log(index, "In todoRout-removeTodo")
        dispatch({
            type:"UPDATE_TODO",
            payload:index,
            payload1:updatingTodo
        })
    }
    return(
        <React.Fragment>
            <TodoInfo.Provider value={{currectSate, addTodo, removeTodo, updateTodo}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" Component={TodoInput} ></Route>
                <Route path="/TodoList" Component={TodoList} ></Route>
                <Route path="/TodoSettings" Component={TodoSettings} ></Route>
            </Routes>
            </BrowserRouter>
            </TodoInfo.Provider>
        </React.Fragment>
    )
}

export default TodoRouting;