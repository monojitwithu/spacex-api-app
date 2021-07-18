import { className } from "postcss-selector-parser"
import React, { Component } from "react"
import f from './App.css'
import Card from "./component/card/Card.js"
import Modal from './component/modal/Modal.js'

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
        <>
      
      <Card item={item}/>
      <Modal item={item}/>
      
      
      
      </> ))}

    </div>
     

      
 




    



      </div>
    )
  }



}

export default App;
