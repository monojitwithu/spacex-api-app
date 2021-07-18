import Modal from "../modal/Modal.js"


const Card=({item})=>{

    return(
      <>
        <div className="col-sm-6">
      
      <div className="card " style={{width: "40rem"}}>
      <img src={item.flickr_images[0]} className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.description}</p>
    <a href="#" className="btn btn-primary" data-toggle="modal" data-target={`#popup${item.id}`}>View More</a>
  </div>
    </div>
    </div>

    

    </>




    )
}

export default Card;