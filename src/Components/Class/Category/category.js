import React, { Component } from "react";
import axios from 'axios';
import { Spinner1Comp } from "../../functional/Spinner/spinner1";
import Btn1ClassComp from "../Button/button";
import Card2Comp from "../../functional/Card/card2";


class CategoryWiseList extends Component{
    constructor(){
        super()
        this.state={
            category:[],
            bgcolor:["Blue", "Gold", "green", "blueviolet", "orange"],
            products:[],
        }      
    }


    componentDidMount(){
        this.fetchCategories()
        this.fetchProducts()
    }

    fetchCategories=async ()=>{try{
        const getCategories= await axios.get("https://fakestoreapi.com/products/categories")
        if(getCategories.status===200){
            this.setState({
                category:getCategories.data
            })
        }
        else{
            alert("Something went wrong")
        }
    }catch(err){
        console.log(err)
    }
    }
    
    fetchProducts=async()=>
        {
            const getProducts=await(axios.get("https://fakestoreapi.com/products"))
            if(getProducts.status===200){
                console.log(getProducts)
                this.setState({
                    products:getProducts.data
                })
            }
            else{
                alert("Something went wrong")
            }
        }

        CategoryWiseList=(category)=>{
            // console.log("hiiii")
            // console.log(category)
    
            switch(category){
                case "electronics":
                    const filtered_list=this.state.products.filter((eachProduct)=>{
                       if(eachProduct.category==="electronics"){return eachProduct}
                    console.log(filtered_list) 
                    
                    // this.setState({products:filtered_list})
                    })
                    break;
                default:
                    console.log("")
            }
            
        }
    


    render(){
        return(
        <>
        {this.state.category.length>0?this.state.category.map((eachCategory,i)=>{
            return(<React.Fragment key={i}>
            <Btn1ClassComp onclick={this.CategoryWiseList} category={eachCategory} bgcolor={this.state.bgcolor[i]}/>  
            {(i===this.state.category.length-1)&& <Btn1ClassComp category={"All Products"} bgcolor={this.state.bgcolor[i+1]}/>}         
            </React.Fragment>)
        })
        :<Spinner1Comp/>
        }
        <br/>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"35px",margin:"35px"}}>
        {this.state.products.length>0 && this.state.products.map((eachProduct,index)=>{
            return(
                <div key={index}>
                <Card2Comp product={eachProduct}/>
                </div>
                )
        })}
        </div>
        
        </>
        )
    }
}

export default CategoryWiseList