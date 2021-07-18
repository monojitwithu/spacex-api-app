import React from "react"




const Modal=({item})=>{


    return(
      <>

        <div class="modal fade" id={`popup${item.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{item.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div> <h5> Cost per Launch </h5> ${item.cost_per_launch}</div>
        <div> <h5>Diameter</h5> {item.diameter.meters} Meter {item.diameter.feet} Feet</div>
        <div> <h5>Height</h5> {item.height.meters} Meter {item.height.feet} Feet</div>
        <div> <h5>Wiki link</h5> <a href={item.wikipedia}>{item.wikipedia}</a></div>
        <div><h5>Country</h5> {item.country}</div>
        
       

      





















          
          
    










      </div>
      
    </div>
  </div>
</div>
</>
    )
}


export default Modal;