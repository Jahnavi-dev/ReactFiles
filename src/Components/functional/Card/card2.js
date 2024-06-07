import "./card2.css"
const Card2Comp=(props)=>{
  console.log(props)
  
    const{title, description, image, category}=props.productData
return(
    <div className="card card2" style={{ width: "22rem",padding:"10px"}}>
    <div className="text-center"><img className="card-img-top" src={image} alt="CardImage" style={{height:200,width:200}} /></div>
    <div className="card-body">
      <h5 className="card-text">Category: {category}</h5>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
)  
}

export default Card2Comp;