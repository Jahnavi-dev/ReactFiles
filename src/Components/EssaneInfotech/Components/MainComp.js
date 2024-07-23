import React, { useEffect, useState } from "react"
import axios from 'axios';

const MainComp=()=>{
    const [data,setData]=useState([])
    const images=[
        {id:1, ig:"https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {id:2, ig:"https://images.unsplash.com/photo-1718839932371-7adaf5edc96a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"},
        {id:3, ig:"https://images.unsplash.com/photo-1721265250302-c02ea398a73c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"},
        {id:4, ig:"https://images.unsplash.com/photo-1721265250103-126ebf3ed4f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"},
        {id:5, ig:"https://plus.unsplash.com/premium_photo-1721143362795-90becc563ecc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
        {id:6, ig:"https://images.unsplash.com/photo-1721265576459-ac6433c540d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"},
        {id:7, ig:"https://images.unsplash.com/photo-1721040840457-3da28666bc45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
        {id:8, ig:"https://images.unsplash.com/photo-1721163202587-f1f7ba17c0cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"},
        {id:9, ig:"https://images.unsplash.com/photo-1721041879224-ff011603ada5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"},
        {id:10, ig:"https://images.unsplash.com/photo-1720821753997-574eea9dade4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"}
    ]

    useEffect(()=>{
        apicall()
      },[data])

    const apicall=async()=>{
        let response=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response)
        setData(response.data)
    }
      
    return(
        <React.Fragment>
            <h1 style={{marginLeft:"20%"}}>Random Images</h1>
            <div style={{width:"800px",display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"10px", marginLeft:"10%"}}>
            {data.map((each,i)=>{
                return(
                    <div key={i} style={{height:"250px",width:"230px", margin:"15px", border:"1px solid black", textAlign:"center", padding:"15px", borderRadius:"10px"}}>
                        <img src={images[i].ig} alt="item" style={{height:"150px", width:"150px"}}/>
                        <p>{each.name}</p>
                        <p>{each.email}</p>
                    </div>
                )
            })}
            </div>
        </React.Fragment>
    )
}

export default MainComp