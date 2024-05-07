
import React from "react"
export const ListComp=()=>{
    // const teams=["RCB","CSK","SRH","LSG","PBKS","MI","KKR"]
    const iplHistory=[
        {
            teamName:"SRH",
            winHistory:1,
            teamPlayers:["PatCummins","Bhuvi","Natarajan"]
        },
        {
            teamName:"RCB",
            winHistory:0,
            teamPlayers:["Virat","Siraj","Duplessis"]
        },
        {
            teamName:"RR",
            winHistory:3,
            teamPlayers:["Sanju","Yashavi","Chahal"]
        },
        {
            teamName:"CSK",
            winHistory:6,
            teamPlayers:["Dhoni","Jadeja","SamCurran"]
        }
    ]
    // return(
    //     <React.Fragment>
    //         <li>{teams[0]}</li>
    //         <li>{teams[1]}</li>
    //         <li>{teams[2]}</li>
    //         <li>{teams[3]}</li>
    //         <li>{teams[4]}</li>
    //     </React.Fragment>
    // )


    // return(
    //     <>
    //     {
    //         teams.map((value)=>{
    //             return(
    //                 <>
    //                 <h3>{value}</h3>
    //                 </>
    //             )
    //         })
    //     }
    //     </>
    // )

    return(
        <>
        {/* {
            iplHistory.map((value,index)=>
                    <>
                    <h3>{index+1}.{value.teamName}</h3>
                    {
                        value.teamPlayers.map((player)=><>
                        <p>{player}</p>
                        </>)
                    }
                    </>
            )
        } */}
        {
            iplHistory.map((value,index)=>
           { const{winHistory,teamPlayers,teamName}=value 
            return(
            <>
                {
                    winHistory>1 &&
                    <>
                        <h3>{index+1}.{teamName}</h3>
                        {
                            teamPlayers.map((player)=><>
                            <p>{player}</p>
                            </>)
                        }
                    </>
                }
            </>)      
            })
        }
        
        </>
    
    )
    
    
}