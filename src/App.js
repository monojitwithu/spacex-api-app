import React, { Component } from "react"


  class App extends Component{
   
  constructor(){
    super()
    this.state={
      rockets:[]

    }

    


  }
  componentDidMount(){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then((buffer)=>buffer.json())
    .then((response)=>this.setState({rockets:response}))
    
  }
  
  render(){
    console.log(this.state.rockets)
    return(
      <div className="container" >
        <div className="row">
      {this.state.rockets.map((item)=>(
      
      <div className="card" style={{width: "18rem"}} key={item.id}>
      <img src="..." className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>)   )}

    </div>
     

      
 




    



      </div>
    )
  }



}

export default App;
