import React, { useEffect, useState } from "react"
import NavbarComp from "../Navbar"
import axios from "axios"
import Image1Comp from "../../Components/functional/Image/img1"
import { Link } from "react-router-dom"
import "./AboutScreen.css"

const AboutScreen=()=>{
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetchProducts()
    },[])

    const fetchProducts=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products")
        console.log(result.data)
        setProducts(result.data)
    }
    return(
        <React.Fragment>
            <NavbarComp/>
            <h1>AboutScreen</h1>
            <div style={{width:"100vw", display:"flex", flexDirection:"row",justifyContent:"center",flexWrap:"wrap", gap:"25px"}}>
            {products.map((eachProduct)=>{
                return(<React.Fragment key={eachProduct.id}>
                    <div className="cardCont" style={{padding:"20px", display:"flex", flexDirection:"column",justifyContent:"center", rowGap:"5px", border:"2px solid grey", borderRadius:"10px", textAlign:"center"}}>
                    <Image1Comp src={eachProduct.image} height={"220px"} width={"220px"} />
                    <Link to={`/products/${eachProduct.id}`}><button className="btn btn-primary">Add to Cart</button></Link>
                    </div>
                </React.Fragment>)
            })}
            </div>
        </React.Fragment>
    )
}

export default AboutScreen