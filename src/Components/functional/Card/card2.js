const Card2Comp=(props)=>{
    // console.log(props)
    const{id,title, description, image}=props.product
return(
    <div key={id}className="card" style={{ width: "22rem",padding:"10px" }}>
    <div className="text-center"><img className="card-img-top" src={image} alt="CardImage" style={{height:200,width:200}} /></div>
    <div className="card-body">
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