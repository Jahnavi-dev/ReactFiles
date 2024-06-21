import React, { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyShopHome from "./HomePage";
import MyShopCart from "./CartPage";
import MyShopProductDetails from "./ProductDetails";

export const image1info=createContext()
const MyShopNavigation=()=>{
    const[image1,setImage1]=useState(false)
    const[image2,setImage2]=useState(false)
    const[image3,setImage3]=useState(false)
    const[image4,setImage4]=useState(false)

    const image1Action=()=>{
        setImage1(!image1)
    }
    const image2Action=()=>{
        setImage2(!image2)
    }
    const image3Action=()=>{
        setImage3(!image3)
    }
    const image4Action=()=>{
        setImage4(!image4)
    }

    return(
        <React.Fragment>
            <image1info.Provider value={{image1,image2,image3,image4,image1Action,image2Action,image3Action,image4Action}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" Component={MyShopHome}/>
                <Route path="/PD"Component={MyShopProductDetails}/>
                <Route path="/Cart"Component={MyShopCart}/>
            </Routes>
            </BrowserRouter>
            </image1info.Provider>
        </React.Fragment>
        
    )
}

export default MyShopNavigation;