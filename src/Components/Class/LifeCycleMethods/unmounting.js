import { Component } from "react";

class UnMountingComp extends Component{

    state={
        showStatus:true
    }


    Action=()=>{
        this.setState({showStatus:!this.state.showStatus})
    }


    componentWillUnmount(){
        console.log("componentWillUnmount", "UnMountingComp")
        console.log("after checking console componentWillUnmount is working only in UnMountChildComp because there the elements are getting disturbed")
    }


    render(){
        return(
            <>
            <h3>UnMountingComp</h3>
            {this.state.showStatus?<UnMountChildComp/>:<h3>No ChildVisible</h3>}
            
            <button onClick={this.Action}>Action</button>
            </>
        )
    }
}

export default UnMountingComp 

class UnMountChildComp extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount", "UnMountChildComp")
    }
    render(){
        return(
            <>
            <h3>Child Visible:  UnMountChildComp</h3>
            </>
        )
    }
}