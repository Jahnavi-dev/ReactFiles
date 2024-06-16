import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutScreen from "../Screens1/AboutScreen"
import HomeScreen from "../Screens1/HomeScreen"
import ContactScreen from "../Screens1/ContactScreen"
import SettingsScreen from "../Screens1/SettingsScreen"
import InvalidScreen from "../Screens1/InvalidScreen"

const Routing1=()=>{
    return(
        <React.Fragment>
            <BrowserRouter>
            <Routes>
                <Route path="/"Component={HomeScreen}/>
                <Route path="/About"Component={AboutScreen}/>
                <Route path="/Contact"Component={ContactScreen}/>
                <Route path="/Settings"Component={SettingsScreen}/>
                <Route path="*"Component={InvalidScreen}/>
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Routing1