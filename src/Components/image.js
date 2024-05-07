const ImageComp=()=>{
    const dimension1={
        height:200,
        width:200
    }
    return(
        // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzub1aPry3RK1oScVi1BhKm0oxF3v31TWeyQ&s" alt="Bag" height="100" width={100} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzub1aPry3RK1oScVi1BhKm0oxF3v31TWeyQ&s" alt="Bag" height={dimension1.height} width={200} />
    )
}

export default ImageComp;