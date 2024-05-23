import { Component } from "react";

class Btn1ClassComp extends Component{
    render(){
        return(
            <button style={{
                backgroundColor:this.props.bgcolor,
                margin:"10px",
                padding:"7px",
                borderWidth:"0px",
                borderRadius:"10px"
        }
            }>{this.props.category}</button>
        )
    }
}

export default Btn1ClassComp