import React, { useContext, useEffect, useState } from "react";
import NavbarSection from "./nav";
import { SP } from "./routings2";
import axios from "axios";
import { Arraylength } from "../../../utills/JSfunctions";
import "./myShop2Style.css"
const CartSection=()=>{
    const{singleProductID}=useContext(SP)
    console.log(singleProductID,  "From Cart Function")
    const [CartProducts, setCartProducts]=useState([])
    const [summation, setSummation]=useState(0)

    useEffect(()=>{
        fectchProduct()
    },[singleProductID])

    const fectchProduct=async()=>{
        if(singleProductID!==0){
            const response =await axios.get(`https://fakestoreapi.com/products/${singleProductID}`)
        console.log(response, "From Cart Function")
        if(response.status===200){
            const item=response.data
            console.log(item, "item item item item item ")
            setCartProducts([...CartProducts,item])
            console.log(CartProducts, "After Adding Products")
        }
        else{
            console.log("singleProduct not fetched from CartSection")
        }
        }

        const TotalSum=()=>{
            if(Arraylength(CartProducts)){
                CartProducts.map((ep)=>{
                    return setSummation(summation+Number(ep.price))
                })
            }
            return summation
        }
        TotalSum()
        
    }
    return(
        <React.Fragment>
            <NavbarSection/>
            <div style={{margin:"20px"}}>
            {Arraylength(CartProducts)&& 
            CartProducts.map((EP)=>{
                const {id, title, price, image}=EP
                return(
                    <div key={id} style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                    <div>
                    <img src={image} alt="product" className="imageStyle"/>
                    <p>{title}</p>
                    </div>
                    <p>{price}</p>
                    </div>
                ) 
            })
            }
            {summation===0?
            <><div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <h4>Total ($) :</h4>
                <h4>{summation}</h4>
            </div></>:
            <><div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
            <h4>Total ($) :</h4>
            <h4>{summation}</h4>
            </div></>}
            </div>
        </React.Fragment>
    )
}

export default CartSection