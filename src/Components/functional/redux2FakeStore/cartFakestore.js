import React from "react"
import NavbarFakeStoreRedux from "./fakeStoreNavbar";
import { useDispatch, useSelector } from "react-redux";
import { Delete_From_Cart_Action } from "../../Redux/Redux2/fakeStoreAPI/cartAction";


const CartFakeStoreRedux=()=>{
    const {cart}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    console.log(cart)

    const  DeleteItemCart=(itemId)=>{
        console.log("hu")
        dispatch(Delete_From_Cart_Action(itemId))
    }

    return(
        <React.Fragment>
            <NavbarFakeStoreRedux/>
            <h1>Cart Items</h1>
            {cart.length===0?<h4>No Items in Cart</h4>:
            cart.map((item)=>{
                return(
                    <div key={item.id} style={{width:"100%", display:"flex"}}>
                        <img src={item.image} alt="Product" style={{height:"10%", width:"10%"}}/>
                        <h4 style={{height:"20px"}}>{item.title}</h4>
                        <button style={{height:"40px"}} className="btn btn-primary" onClick={()=>DeleteItemCart(item.id)}>Delete From Cart</button>
                    </div>
                )
            })
            }
        </React.Fragment>
    )
}
export default CartFakeStoreRedux;