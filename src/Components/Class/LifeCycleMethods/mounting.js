import { Component } from "react";
import Card2Comp from "../../functional/Card/card2";
import axios from 'axios';
class Mounting extends Component{
    constructor(){
        super()
        this.state={
            products:[],
            changeStateViaGDSFP:"inMounting"
        }
    }
    static getDerivedStateFromProps(props){
        return {
            changeStateViaGDSFP:props.changeStateViaGDSFP
        }
    }
    componentDidMount(){
        // fetch("https://fakestoreapi.com/products/")
        // .then(res=>res.json())
        // .then(data=>this.setState({
        //     products:data
        // }))

        // axios.get("https://fakestoreapi.com/products/")
        // .then((response)=>this.setState({
        //         products:response.data
        //     }))
        this.fetchData()

        document.title="Mounting stage Methods"
    }
    fetchData=async ()=>{try{
        const response=await axios.get("https://fakestoreapi.com/products/")
        
        console.log(response.data)
        if(response.status===200){
            this.setState({
                products:response.data
            })
        }else{
            alert("something went wrong")
            
        }
    }
    catch(err){
        console.log(err)
    }
}
    render(){
        return(
            <>
            <h1>Mounting Stage Methods</h1>
            <br/>
            <h3>Getting Products</h3>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"35px",margin:"35px"}}>
            {this.state.products.length>0?
            this.state.products.map((eachProduct)=>{
                return(
                    <>
                    <div><Card2Comp product={eachProduct}/></div>
                    </>
                    )
            }):
            <p>Something Went Wrong</p>}
            </div>
            <p>{this.state.changeStateViaGDSFP}</p>
            </>
        )
    }

}
export default Mounting