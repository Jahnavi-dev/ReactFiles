import { Component } from "react";
import "./counter2.css"

class Counter2Comp extends Component{
    state={
        isSubscribe:false,
        count:0
    }

    changeCounter=(action)=>{
        switch(action){
            case "Increment":
                this.setState({
                    count:this.state.count+1
                })
                break
            case "Reset":
                this.setState({
                    count:0
                })
                break
            case "Decrement":
                (this.state.count>0)&&
                this.setState({
                count:this.state.count-1
                    })
                    break
            default:
                console.log("")
        }

    }

    isSubscribeAction=()=>{
        this.setState({isSubscribe:!(this.state.isSubscribe)})
        console.log(this.state.isSubscribe)
    }


    render(){
        return(
            <div style={{backgroundColor:"blueviolet", width:"30%", margin:"20px", textAlign:"center", padding:"15px"}}>
                <button onclick={this.isSubscribeAction}>{this.state.isSubscribe?"subscribed":"subscribe"}</button>

                <h1>My Counter App</h1>
                <h1>{this.state.count}</h1>
                <button className="btn2styling" onClick={()=>this.changeCounter("Increment")}>Increment</button>
                <button className="btn2styling" onClick={()=>this.changeCounter("Reset")}>Reset</button>
                <button className="btn2styling" onClick={()=>this.changeCounter("Decrement")}>Decrement</button>
            </div>
        )
    }
}

export default Counter2Comp;