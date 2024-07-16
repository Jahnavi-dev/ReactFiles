import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductCallActionCreator } from "../../Redux/Redux2/fakeStoreAPI/action"
import NavbarFakeStoreRedux from "./fakeStoreNavbar"
import { Add_To_Cart_Action } from "../../Redux/Redux2/fakeStoreAPI/cartAction"


const HomeFakeStoreRedux=()=>{
    
    const {products, loading}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        getProducts()
        console.log(products, "2nd Console from HomeFakeStoreRedux")
    },[])

    const getProducts=()=>{
        dispatch(ProductCallActionCreator())
    }

    const addToCartFunction=(Item)=>{
        dispatch(Add_To_Cart_Action(Item))
    }
    return(
        <React.Fragment>
            <NavbarFakeStoreRedux/>
            <h1>Getting Products</h1>
            {
                loading?<p>Please wait while loading</p>:
                <div style={{width:"100%", display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"8%", justifyContent:"space-evenly"}}>
                    {products.map((Item)=>{
                        return(
                            <div key={Item.id} style={{width:"25%"}}>
                                <img src={Item.image} alt="product" height={200} width={200}/>
                                <h5>{Item.title}</h5>
                                <button className="btn btn-primary" onClick={()=>addToCartFunction(Item)}>Add to Cart</button>
                            </div>
                        )
                    })}
                </div>   
            }         
        </React.Fragment>
    )
}

export default HomeFakeStoreRedux;