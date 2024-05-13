import React, { Component } from "react";
import "./classhead1.css"
import style from "./classhead1.module.css"


class HeadCompClass extends (Component){
    render(){
        const h1style={
            backgroundColor:"pink",
            color:"blue",
            width:"200px",
            borderRadius:"10px",
            margin:"10px",
            paddingLeft:"10px"
        }
        return(
            <React.Fragment>
                <h1 style={h1style}>Rose</h1>
                <h2 className="h2style">Lily</h2>
                <h3 className={style.h3style}>Jasmine</h3>
            </React.Fragment>
        )
    }
}
export default HeadCompClass