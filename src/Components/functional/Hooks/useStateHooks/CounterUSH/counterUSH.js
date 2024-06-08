import React, { useState } from "react";
import "./counterUSH.css"
import ButtonUSH from "./buttonUSH";

const CounterUSH=()=>{
    const [count, updateCount]=useState(0);

    const [isSubscribe, updateSubscribe]=useState(false)

    const counterAction=(userAction)=>{
        switch(userAction){
            case "Increment":
                updateCount(count+1)
                break 
            case "Reset":
                updateCount(0)
                break 
            case "Decrement":
                if(count>0){
                    updateCount(count-1)
                }
                break 
            default:
                break
        }

    }

    const subscribeAction=()=>{
        updateSubscribe(!isSubscribe)
    }



    return(<React.Fragment>

        
        <div className="mainCont">
            <ButtonUSH onclick={subscribeAction}>{isSubscribe?"Subscribed":"Subscribe"}</ButtonUSH>
            {isSubscribe&&
            <><h1 className="mainHead">Counter</h1>        
            <h1 className="counter">{count}</h1>
            <div className="btnCont">
                <ButtonUSH onclick={()=>counterAction("Increment")}>Increment</ButtonUSH>
                <ButtonUSH onclick={()=>counterAction("Reset")}>Reset</ButtonUSH>
                <ButtonUSH onclick={()=>counterAction("Decrement")}>Decrement</ButtonUSH>
            </div>
            </>}
            
        </div>
        
        
    </React.Fragment>)
}

export default CounterUSH;