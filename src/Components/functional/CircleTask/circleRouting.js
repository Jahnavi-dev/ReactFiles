import React, { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllCircles from "./AllCircles"
import ColoredCircles from "./ColoredCircles"


export const circlesInfo=createContext()
const CircleRouting=()=>{
    const [circlesObjs, AddcirclesObjs]=useState([{id:1, styling:false}])

    const circleBGstyle=(index)=>{
        AddcirclesObjs(circlesObjs.map((each)=>{
            if(each.id===index){
                return {...each, styling:!(each.styling)}
            }
            else{
                return each
            }
        }))
    }

    const AddCircleObjs=()=>{
        AddcirclesObjs([...circlesObjs, {id:Number(circlesObjs[circlesObjs.length-1].id)+1, styling:false }])
    }


    

    return(
        <React.Fragment>
            <circlesInfo.Provider  value={{circlesObjs, circleBGstyle, AddCircleObjs}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" Component={AllCircles}/>
                <Route path="/ColoredCircles" Component={ColoredCircles}/>
            </Routes>
            </BrowserRouter>
            </circlesInfo.Provider>
        </React.Fragment>
    )
}

export default CircleRouting