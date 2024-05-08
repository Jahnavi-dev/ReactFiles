
import React from "react"
export const ListComp=()=>{
    const iplData=[
        {
            teamName:"SRH",
            teamImage:"https://scores.iplt20.com/ipl/teamlogos/SRH.png",
            players:["PatCummins", "Bhuvi", "Natarajan","TravisHead", "MayankAgarwal"],
            winYears:[2016],
            winCount:1
        },
        {
            teamName:"RCB",
            teamImage:"https://scores.iplt20.com/ipl/teamlogos/aFPMviEPyJ1710927747rcb.png",
            players:["Virat", "Siraj", "Duplessis","DineshKarthik", "RajatPatidar"],
            winYears:[],
            winCount:0
        },
        {
            teamName:"CSK",
            teamImage:"https://scores.iplt20.com/ipl/teamlogos/CSK.png",
            players:["Dhoni", "Jadeja", "SamCurran","RuturajGaikwad", "AjinkyaRahane"],
            winYears:[2010, 2011, 2018, 2021, 2023],
            winCount:5
        },
        {
            teamName:"MI",
            teamImage:"https://scores.iplt20.com/ipl/teamlogos/MI.png",
            players:["RohitSharma", "HardhikPandya", "SuyaKumarYadav","Bumrah", "IshanKisan"],
            winYears:[2013, 2015, 2017, 2019, 2020],
            winCount:5
        },
        {
            teamName:"RR",
            teamImage:"https://scores.iplt20.com/ipl/teamlogos/RR.png",
            players:["SanjuSamson", "JosButtler", "Yashavi","Chahal", "Hetmyer"],
            winYears:[],
            winCount:0
        },
        {
            teamName:"KKR",
            teamImage:"https://scores.iplt20.com/ipl/teamlogos/KKR.png",
            players:["Player1", "Player2", "Player3","Player4", "Player5"],
            winYears:[2012,2014],
            winCount:2
        }
    ]
  return(
    <React.Fragment>
        {
            iplData.map((value, index)=>{
                const {teamName, teamImage, players}=value
                return(<React.Fragment>
                    <h1>{index+1}. {teamName}</h1>
                    <img src={teamImage} height={100} width={100} alt=""/>

                    {players.map((player)=>{return(
                        <>
                        <p>{player}</p>
                        </>
                    )
                    })}
                </React.Fragment>)
            })
        }
    </React.Fragment>
  )
}



    