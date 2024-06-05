import { Component } from "react"
import "./timer.css"
import Btn1ClassComp from "../Button/button"

export default class Timer extends Component{
    constructor(){
        super()
        this.state={
            start:0,
            reset:0
        }
        this.timerStart=null;
    }
    triggerTimer=(Action)=>{
        
        switch(Action){
            case "Start":
                console.log("Start")
                this.timerStart=setInterval(()=>{
                    this.setState({start:this.state.start+1})
                    if (this.state.start===60){
                        this.setState({start:1, reset:this.state.reset+1})
                    }
                },400)
                break
            case "Reset":
                console.log("Reset")
                clearInterval(this.timerStart)
                this.setState({start:0, reset:0})
                break
            default:
                console.log("No Action matched")
        }

    }


render(){
    return(
        <div className="mainCont">
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <h1 className="timerStyle">{this.state.start===0 ? "00":this.state.start}</h1>
            <h1 className="timerStyle">:</h1>
            <h1 className="timerStyle">{this.state.reset===0 ? "00":this.state.reset}</h1>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", columnGap:"40px"}}>
                <Btn1ClassComp onclick={()=>this.triggerTimer("Start")}text={"Start"}/>
                <Btn1ClassComp onclick={()=>this.triggerTimer("Reset")}text={"Reset"}/>
            </div>
            
        </div>
    )
}
}