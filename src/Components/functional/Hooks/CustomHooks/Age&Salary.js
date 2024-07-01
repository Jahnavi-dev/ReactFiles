import useCounterCustomHook from "./customHook"
import React from "react"
import useAxios from "./useAxios"

const AgeSalary=()=>{
    const[Age, incrementAge, decrementAge, resetAge]=useCounterCustomHook(20)
    const[Salary, incrementSal, decrementSal, resetSal]=useCounterCustomHook(1000, 500)
    const [products, loading, error]=useAxios("https://fakestoreapi.com/products")
    console.log(products)
    return(
        <React.Fragment>
            <h4>Age: {Age}</h4>
            <button onClick={incrementAge}>incrementAge</button>
            <button onClick={resetAge}>resetAge</button>
            <button onClick={decrementAge}>decrementAge</button>
            <br/>
            <h4>Salary: {Salary}</h4>
            <button onClick={incrementSal}>incrementAge</button>
            <button onClick={resetSal}>resetAge</button>
            <button onClick={decrementSal}>decrementAge</button>
            
            <h2>Products</h2>
            <div className="d-flex flex-row" style={{width:"100px",padding:"10px"}}>
                {products.length===0?
                 <p>No Products</p>:
                 products.map((eachProduct, index)=>{
                    return(<React.Fragment key={index}>
                            <img src={eachProduct.image} alt="products" style={{height:"150px", width:"150px"}}/>
                            <br/>
                            <p>{eachProduct.title}</p>
                        </React.Fragment>)
                 })
                 }
            </div>
        </React.Fragment>
    )
}

export default AgeSalary