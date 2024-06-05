import { Component } from "react";

class Btn1ClassComp extends Component{
    
    btnStyle={
        backgroundColor:"Yellow",
        width:"80px",
        height:"30px",
        borderWidth:"0px",
        borderRadius:"5px",
    }

    render(){
        return(
            <button style={this.btnStyle} onClick={this.props.onclick}>{this.props.text}</button>
        )
    }
}

export default Btn1ClassComp