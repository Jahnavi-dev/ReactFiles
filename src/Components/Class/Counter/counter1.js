import { Component } from "react";

const btnstyle={
    margin:"10px",
    borderRadius:"5px"
}
class Counter1Comp extends Component{
    // btnstyle={
    //     margin:"10px",
    //     borderRadius:"5px"
    // }
    state={
        count:0,
        heading:"My Counter App",
        subscribeText:"Subscribe",
        isSubscribe:false
    }

    IncrementAction=()=>{

        this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count, "Increment")
        })

        console.log("IncrementAction")
    }

    ResetAction=()=>{

        this.setState({
            count:0
        },()=>{
            console.log(this.state.count, "Reset")
        })

    }

    DecrementAction=()=>{
        
        if(this.state.count>0)
        this.setState({
            count:this.state.count-1
        },()=>{
            console.log(this.state.count, "Decrement")
        })

    }

    SubscribeButton=()=>{

        this.setState({
            // subscribeText:"Subscribed",
            isSubscribe:!(this.state.isSubscribe)
        })

    }
    render(){
        return(<>
        <h1>{this.state.heading}</h1>
        <button style={(!this.state.isSubscribe)? {backgroundColor:"red"} : {backgroundColor:"green"}} onClick={this.SubscribeButton}>
            {!(this.state.isSubscribe)?"Subscribe":"Subscribed"}</button>
        {this.state.isSubscribe && 
        <>
        <h1>{this.state.count}</h1>
        <button style={btnstyle} onClick={this.IncrementAction}>Increment</button>
        <button style={btnstyle} onClick={this.ResetAction}>Reset</button>
        <button style={btnstyle} onClick={this.DecrementAction}>Decrement</button>
        </>}
        
        </>)
    }
       
    
}

export default Counter1Comp