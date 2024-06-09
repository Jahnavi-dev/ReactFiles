import React, { useState } from "react";
import TimerBtnUSH from "./timerBtnUSH";
import "./timerUSH.css"


const TimerUSH=()=>{
    const [min, updatemin]=useState(5)
    const [sec, updatesec]=useState(60)

    
    const startandStopAction=(Action)=>{
        let startAction;
        switch(Action){
            case "start":
                startAction= setInterval(()=>{
                updatesec(sec=>{
                    if(sec===0){
                        updatemin(min=>min-1)
                        return 60
                    }
                    // if(min===0){
                    //     clearInterval(startActions)
                    //     updatemin(value=>"00")
                    //     updatesec(value=>"00")
                    // }
                    else{
                        return sec-1
                    }
                    })
                console.log("start")
                console.log(sec) //why here value is not changing
            },200)
            break;
        case "stop":
            console.log("stop")
            clearInterval(startAction);
            break;
        default:break
        }
        
    }

    

    return(<React.Fragment>
        <div className="mainCont">
            <h1>Timer</h1>
            <h1>{`0${min}`} : {sec===60?"00":sec}</h1>
            <div className="btnMainCont">
                <TimerBtnUSH onclick={()=>startandStopAction("start")}>Start</TimerBtnUSH>
                <TimerBtnUSH onclick={()=>startandStopAction("stop")}>Stop</TimerBtnUSH>
            </div>
        </div>
    </React.Fragment>)

}

export default TimerUSH;