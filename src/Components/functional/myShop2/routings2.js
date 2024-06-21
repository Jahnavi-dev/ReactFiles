import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeSection from "./Home"
import CartSection from "./Cart"
import ProductSection from "./ProductInfo"
import React, { createContext, useState } from "react"

export const SP=createContext()
const Routing2=()=>{
    const [singleProductID, setsingleProductID]=useState(0)

    const HomeFun1=(id)=>{
        setsingleProductID(id)
    }

    return(<React.Fragment>
        <SP.Provider value={{singleProductID, HomeFun1}}>
        <BrowserRouter>
        <Routes>
            <Route path="/"Component={HomeSection}/>
            <Route path="/Product/:id"Component={ProductSection}/>
            <Route path="/Cart"Component={CartSection}/>
        </Routes>
        </BrowserRouter>
        </SP.Provider>
    </React.Fragment>)
}

export default Routing2;