import React from "react";
import "./timerUSH.css"


const TimerBtnUSH=(props)=>{
    const {children, onclick}=props

    return(
        <React.Fragment>
            <button className="btnStyle" onClick={onclick}>{children}</button>
        </React.Fragment>
    )
}

export default TimerBtnUSH;