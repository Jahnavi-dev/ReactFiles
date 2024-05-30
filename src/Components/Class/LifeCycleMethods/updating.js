import { Component } from "react";
import axios from 'axios';

class UpdatingComp extends Component{
    constructor(){
        super()
        this.state={
            count:1,
            color:"Red",
            product:null
        }
    }


    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps", props)
        // return null
        return{
            color:props.color
        }
    }


    componentDidMount(){
        console.log("componentDidMount")
        document.title=`Counter: ${this.state.count}`
        axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then(response=>
            {if(response.status===200){this.setState({product:response.data})}}
        )
            
    }


    // componentDidUpdate(){
    //     console.log("componentDidUpdate")
    //     document.title=`Counter: ${this.state.count}`
    //     axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
    //     .then(response=>
    //         {if(response.status===200){this.setState({product:response.data})}}
    //     )
    // }

    shouldComponentUpdate(){
        return true
    }


    getSnapshotBeforeUpdate(state, props){
        console.log(props, state, "getSnapshotBeforeUpdate")
        return null
    }


    incrementAction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


    render(){
        console.log("Render----------------")
        return(
            <>
            <h1 style={{color:this.state.color}}>Counter</h1>
            <h1 style={{marginLeft:"20px"}}>{this.state.count}</h1>
            <button onClick={this.incrementAction}>Increment</button>
            {this.state.product?
            <>
            <h1>{this.state.product.title}</h1>
            <img height="100px" width="100px" src={this.state.product.image} alt="bag"/></>:null}
            </>
        )
    }
}

export default UpdatingComp