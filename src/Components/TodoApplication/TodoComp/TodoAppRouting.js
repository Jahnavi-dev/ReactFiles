import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoAppHome from "./TodoAppHome"
import TodoItem from "./TodoItem"


const TodoAppRouting=()=>{
    return(
        <React.Fragment>
            <BrowserRouter>
            <Routes>
                <Route path="/" Component={TodoAppHome}/>
                <Route path="/Todo/:text" Component={TodoItem}/>
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default TodoAppRouting;