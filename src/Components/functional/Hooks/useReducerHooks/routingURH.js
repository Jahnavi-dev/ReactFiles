import React, { createContext, useReducer } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeURH from "./homeURH";
import AboutURH from "./aboutURH";
import SettingURH from "./settingURH";
import initialState, { ReducerFun } from "./reducerFun";


export const data=createContext()
const RoutingURH=()=>{
    const [currentState, dispatch]=useReducer(ReducerFun, initialState)
    console.log(currentState, "currentState from routingPage")

    const handleIncrement=()=>{
        dispatch({type:"INCREMENT"})
    }
    const handleDecrement=()=>{
        dispatch({type:"DECREMENT"})
    }
    const handleReset=()=>{
        dispatch({type:"RESET"})
    }
    const nameChange=()=>{
        dispatch({type:"NAME_CHANGE"})
    }
    const subjectsAdd=()=>{
        dispatch({type:"ADD_SUBJECTS"})
    }
    const subjectsAdd1=(subject_auto)=>{
        dispatch({type:"ADD_SUBJECTS1", 
            payload:subject_auto
        })
    }

    return(
        <React.Fragment>
            <data.Provider value={{currentState, handleIncrement, handleDecrement, handleReset, nameChange, subjectsAdd, subjectsAdd1}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomeURH}></Route>
                <Route path="/About" Component={AboutURH}></Route>
                <Route path="/Setting" Component={SettingURH}></Route>
            </Routes>
            </BrowserRouter>
            </data.Provider>
        </React.Fragment>
    )
}

export default RoutingURH;