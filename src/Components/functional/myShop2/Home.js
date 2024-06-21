import React, { useContext, useEffect, useState } from "react";
import NavbarSection from "./nav";
import axios from "axios"
import { Arraylength } from "../../../utills/JSfunctions";
import "./myShop2Style.css"
import { Link } from "react-router-dom";
import { SP } from "./routings2";


const HomeSection=()=>{
    const [Products, setProducts]=useState([])
   
    const{singleProductID,HomeFun1}=useContext(SP)
    console.log(singleProductID, "From Home Section")

    useEffect(()=>{
        fetchProducts()
    },[])

    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
        if(response.status===200){
            setProducts(response.data)
        }
        else{
            console.log("fetching products from fakeStoreAPI not done")
        }

    }

    const btnAction=(id)=>{
        console.log(id, "On btn click checking id from Home section")
        HomeFun1(id)
    }

    
    return(
        <React.Fragment>
            <NavbarSection/>
                {Arraylength(Products)?
                <div className="mainCont">
                {(Products.map((EP)=>{
                    const {id,title,price,image}=EP
                    return(
                        <div className="cardCont" key={id}>
                            <Link to={`/Product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}><img src={image} alt="product" className="imageStyle"/></Link>
                            <p className="titleStyle">{title}</p>
                            <h6>$ {price}</h6>
                            <button className="btn btn-outline-dark" onClick={()=>btnAction(id)}>
                                Add to Cart
                            </button>
                        </div>
                    )
                }))}</div>
                :<h3>Loading Products Please Wait</h3>}
            
        </React.Fragment>
    )
}

export default HomeSection