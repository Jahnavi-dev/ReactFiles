import React, { createContext, useReducer, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutScreen from "../Screens1/AboutScreen"
import HomeScreen from "../Screens1/HomeScreen"
import ContactScreen from "../Screens1/ContactScreen"
import SettingsScreen from "../Screens1/SettingsScreen"
import InvalidScreen from "../Screens1/InvalidScreen"
import ProductDetails from "../Screens1/Cart/ProductScreen"


export const userInfo=createContext()
export const themeInfo=createContext()
export const CounterInfo=createContext()

const reducerFunc=(state,action)=>{
    console.log(state, "reducerFun reducerFun reducerFun reducerFun reducerFun reducerFun reducerFun")
    switch(action.type){
       case "INCREMENT_ACTION":
        return {...state, count:state.count+1}
       default:return state
    }

}
const initialState={count:0}
const Routing1=()=>{
    const [userName, setUserName]=useState("Ram")
    const [darkmode, setDarkMode]=useState(false)
    const [count, setCount]=useState(0)

    const[currentState, dispatchfunc]=useReducer(reducerFunc,initialState)

    const IncrementRHF=()=>{
        dispatchfunc({type:"INCREMENT_ACTION"})
    }

    const darkmodeSwitching=()=>{
        setDarkMode(!darkmode)
    } 

   const counterActionAll=(Action="increment")=>{
    switch(Action){
        case "Increment":setCount(count+1)
        break;
        case "Decrement":
            if(count>0){setCount(count-1)}
            else{}
        break;
        case "Reset":setCount(0)
        break;
        default: console.log("No Change in Counter")

    }
   }
    return(
        <React.Fragment>
            <userInfo.Provider value={userName}>
            <themeInfo.Provider value={{darkmode, darkmodeSwitching}}>
            <CounterInfo.Provider value={{count, counterActionAll, IncrementRHF, currentState}}>
            <BrowserRouter>
            <Routes>
                <Route path="/"Component={HomeScreen}/>
                <Route path="/About"Component={AboutScreen}/>
                <Route path="/Contact"Component={ContactScreen}/>
                <Route path="/Settings"Component={SettingsScreen}/>
                <Route path="/products/:productID" Component={ProductDetails}/>
                <Route path="*"Component={InvalidScreen}/>
            </Routes>
            </BrowserRouter>
            </CounterInfo.Provider>
            </themeInfo.Provider>
            </userInfo.Provider>
        </React.Fragment>
    )
}

export default Routing1