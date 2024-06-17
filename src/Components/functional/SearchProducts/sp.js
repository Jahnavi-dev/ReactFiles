import React, { useState, useEffect } from "react"
import axios from "axios"
import { Arraylength, Objectlength } from "../../../utills/JSfunctions"
import Card2Comp from "../Card/card2"

const SearchProducts=()=>{
    const[products, setProducts]=useState([])
    const[singleProduct, setsingleProduct]=useState({})

    useEffect(()=>{
        window.addEventListener("mousemove",mousemoveFunction)
        return()=>{
            window.removeEventListener("mousemove",mousemoveFunction)

        }

    },[])
    const mousemoveFunction=()=>{
        console.log("MouseMoveEvent triggred")
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
        if(response.status===200){
            setProducts(response.data)
        }
        else{
            console.log("while fetching something went wrong")
        }
    }

   const searchAction=()=>{
    const searchInput=document.getElementById("searchInput")
    // console.log(searchInput.value)
    const productID=searchInput.value
    axios.get(`https://fakestoreapi.com/products/${productID}`)
    .then(res=>{
        if(productID!==""){
            setsingleProduct(res.data)
        }
        else{
        setsingleProduct({});
        if(productID===""){fetchProducts()}
    }
    })
   }
    
    return(
        <React.Fragment>
            <h2 style={{textAlign:"center", marginTop:"10px", textShadow:"1px 1px 2px black",marginBottom:"15px"}}>Search Products based on Product ID </h2>
            <input type="search" id="searchInput" style={{width:"400px", marginLeft:"370px"}}/> 
            <button onClick={searchAction} style={{width:"100px", height:"32px", backgroundColor:"blueviolet", color:"white", borderWidth:"0px", borderRadius:"5px", marginLeft:"15px"}}>Search</button>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center",flexWrap:"wrap", gap:"30px", padding:"30px"}}>
            {!Objectlength(singleProduct)?(Arraylength(products)? 
            products.map((eachP)=>{
                return(<React.Fragment key={eachP.id}><Card2Comp productData={eachP}/></React.Fragment>)
            })
            :<p>Loading Please wait.....</p>):<Card2Comp productData={singleProduct}/>}  
            </div>     
        </React.Fragment>
    )
}

export default SearchProducts