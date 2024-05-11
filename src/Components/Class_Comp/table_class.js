import { Component } from "react";



class TableClassComp extends Component{
    render(){
        const iplData=[
            {
                id:1,
                teamName:"SRH",
                teamImage:"https://scores.iplt20.com/ipl/teamlogos/SRH.png"
            },
            {
                id:2,
                teamName:"RCB",
                teamImage:"https://scores.iplt20.com/ipl/teamlogos/aFPMviEPyJ1710927747rcb.png"
            },
            {
                id:3,
                teamName:"CSK",
                teamImage:"https://scores.iplt20.com/ipl/teamlogos/CSK.png"
            },
            {
                id:4,
                teamName:"MI",
                teamImage:"https://scores.iplt20.com/ipl/teamlogos/MI.png"
            }
          
        ]
        return(
            <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>TeamName</th>
                    <th>TeamImage</th>
                </tr>
                <tr>
                    <td>{iplData[0].id}</td>
                    <td>{iplData[0].teamName}</td>
                    <td><img src={iplData[0].teamImage} alt="" height={100} width={100}/></td>
                </tr>
                <tr>
                    <td>{iplData[1].id}</td>
                    <td>{iplData[1].teamName}</td>
                    <td><img src={iplData[1].teamImage} alt="" height={100} width={100}/></td>
                </tr>
                <tr>
                    <td>{iplData[2].id}</td>
                    <td>{iplData[2].teamName}</td>
                    <td><img src={iplData[2].teamImage} alt="" height={100} width={100}/></td>
                </tr>
                <tr>
                    <td>{iplData[3].id}</td>
                    <td>{iplData[3].teamName}</td>
                    <td><img src={iplData[3].teamImage} alt="" height={100} width={100}/></td>
                </tr>
            </table>
            <form>
                <input type="submit" value ="click me"/>
            </form>
            </>
        )
    }
}

export default TableClassComp;