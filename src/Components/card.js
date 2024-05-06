import ButtonComp from "./button.js";
    
const CardComp=()=>{
    const cardStyle = {
        color: 'blue',
        backgroundColor: 'black',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        width:'200px',
        height:'200px',
        margin:"10px"
      };
    return(
        <div style={cardStyle}>
            <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="band" height={100} width={100}/>
            <br/>
            <ButtonComp/>
        </div>
    )
}

export default CardComp