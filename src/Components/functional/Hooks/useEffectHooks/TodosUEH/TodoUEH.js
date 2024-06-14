import React, { useEffect, useState } from "react"
import axios from "axios" 
import { Arraylength, Objectlength } from "../../../../../utills/JSfunctions"


const TodoUEH=()=>{
    const [todos, setTodos]=useState([])
    const [count,setCount]=useState(1)
    const [todo,setTodo]=useState({})


    useEffect(()=>{
            console.log("useEffectHook")
            getTodos()
            const ele=document.getElementById("mainHead")
            console.log(ele)
            ele.textContent="Getting Products"
    },[])

    const getTodos=async()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(response, "fullResponse")
        if(response.status===200){
            setTodos(response.data)
        }
        else{
            console.log("API issue")
        }
        console.log(todos)
    }

    useEffect(()=>{
        document.title=`Count ${count}`
        fetchEachTodo()
    },[count])

    const fetchEachTodo=async()=>{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`)
        console.log(response, "single Todo")
        if(response.status===200){
            setTodo(response.data)
        }
        else{
            console.log("API issue")
        }
    }

    
    const incrementAction=()=>{
        setCount(count+1)
    }
    
    return(<React.Fragment>
        <h1 id="mainHead">useEffect Hook</h1>
        <h1>{count}</h1>
        {Objectlength(todo) && <p style={{backgroundColor:"skyblue"}}>{todo.title}</p> }
        <button onClick={incrementAction}>Increment</button>
        {Arraylength(todos) && todos.map((eachTodo)=>{
            console.log(eachTodo)
            const {id,title}=eachTodo
            return(
                <React.Fragment key={id}>
                    <h3>{title}</h3>
                </React.Fragment>
            ) 
        })}
    </React.Fragment>)
}

export default TodoUEH