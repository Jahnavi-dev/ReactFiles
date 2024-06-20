import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Objectlength } from "../../../utills/JSfunctions"
import { Spinner1Comp } from "../../../Components/functional/Spinner/spinner1"
import Card2Comp from "../../../Components/functional/Card/card2"

const ProductDetails=()=>{
    const [product, setProduct]=useState({})
    useEffect(()=>{
        fetchProduct()
   },[]) 

   const paramsObj=useParams()
   console.log(paramsObj)
   const {productID}=paramsObj

   const fetchProduct=async()=>{
    const result=await axios.get(`https://fakestoreapi.com/products/${productID}`)
    console.log(result)
    setProduct(result.data)
   }
    
   
    return(
        <React.Fragment>
            <h1>ProductDetails</h1>
            {Objectlength?
            <div style={{marginLeft:"100px"}}><Card2Comp productData={product}/></div>
            :
            <Spinner1Comp/>}
        </React.Fragment>
    )
}

export default ProductDetails