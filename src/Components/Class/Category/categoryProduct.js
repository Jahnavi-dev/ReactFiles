import axios, { Axios } from "axios";
import React, { Component } from "react";
import { Spinner1Comp } from "../../functional/Spinner/spinner1";
import Card2Comp from "../../functional/Card/card2";
import "./categoryProducts.css"

class CategoryWiseProducts extends Component{
    constructor(){
        super()
        this.state={
            productsP:[],
            categoryC:[],
            loading:false
        }
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.fetchProductsP();
        this.fetchCategoriesC();

    }
    fetchProductsP=async ()=>{
        this.setState({loading:true})
        const productsData=await axios.get("https://fakestoreapi.com/products")
        console.log(productsData)
        const {data}=productsData
        this.setState({loading:false, productsP:data})
    }

    fetchCategoriesC=async ()=>{
        const categoriesData=await axios.get("https://fakestoreapi.com/products/categories")
        console.log(categoriesData)
        const {data}=categoriesData;
        console.log(data)
        const withAllCategories=[...data, "All"]
        this.setState({categoryC:withAllCategories})
        console.log(withAllCategories)
    }

    filterBtn=async(category)=>{
        this.setState({loading:true})
        console.log(category)
        if(category==="All"){
            this.fetchProductsP()
        }
        else{
            const filteredData= await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        console.log(filteredData);
        console.log(filteredData.data);
        this.setState({loading:false, productsP:filteredData.data})
        }
    }


    render(){
        return(<React.Fragment>
            <h1 className="MainHead">All Products</h1>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}> 
                {this.state.categoryC.length>0?this.state.categoryC.map(
                    (eachC, index)=>{return( <button key={index} className="btnsStyling" onClick={()=>this.filterBtn(eachC)}>{eachC}</button> )})
                :<Spinner1Comp/>}
            </div>

            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                {!this.state.loading?
                this.state.productsP.map((eachP)=>{
                    return(
                        <Card2Comp key={eachP.id} productData={eachP}/>
                    )
                })
                :<Spinner1Comp/>}
            </div>
        </React.Fragment>)
    }
}

export default CategoryWiseProducts