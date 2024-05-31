import React, { Component } from "react";
import axios from "axios"
import "./ProductsTask.css"
import Card2Comp from "../../functional/Card/card2";

class EachProduct extends Component{
    state={
        products:null,
        singleProduct:null
    }
    componentDidMount(){
        console.log("componentDidMount")
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                this.setState({products:response.data})
            }
            })
    }


    getProduct=(id)=>{
        console.log(id, "In Event")
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>
            {
                this.setState({singleProduct:response.data})
                console.log(this.state.singleProduct, "--------------")
            })
    }

    
    render(){
        return(
            <React.Fragment>
                <h1 className="heading">FakeStore API Products</h1>
                <div className="btnCont">
                {this.state.products?
                this.state.products.map(
                    (eachProduct)=>{return(<button key={eachProduct.id} className="btnsStyle" onClick={()=>this.getProduct(eachProduct.id)}>{eachProduct.id}</button>)})
                :<h3>Loading.....</h3>}
                </div>
                {
                   this.state.singleProduct?<Card2Comp productData={this.state.singleProduct}/> : <h3 className="message">Get The Product you want</h3>
                }

            </React.Fragment>
        )
    }
}

export default EachProduct;