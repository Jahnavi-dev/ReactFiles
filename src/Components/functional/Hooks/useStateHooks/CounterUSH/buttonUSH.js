import React from "react";
import "./counterUSH.css"

const ButtonUSH=(props)=>{
    const {children, onclick}=props

    return(
        <React.Fragment>
            <button className="btnStyle" onClick={onclick}>{children}</button>
        </React.Fragment>
    )
}

export default ButtonUSH;