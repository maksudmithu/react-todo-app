import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan.jsx'

import React, { Component } from 'react'

 class App extends Component {
  state = {
    items:[],
    text:""
  }
  handleChange = e =>{
    this.setState({text: e.target.value})
  }
  handleAdd = e =>{
    if(this.state.text !==""){
      const items = [...this.state.items, this.state.text];
      this.setState({items:items, text:""})
    }
  }
  handleDelete = id =>{
    console.log("Deleted",id)
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((Element, i)=>{
      return i !== id
    })
    console.log("Newitems", items)
    this.setState({items:items});
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 mx-auto text-black shadow-lg p-3">
              <h1 className="text-center">Today's Work</h1>
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder='My Everyday Work' value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-3">
                  <button className="btn btn-warning px-4 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
                <div className="container-fluid">
                  <ul className="list-unstyled row m-5">
                    {
                      this.state.items.map((value, i)=>{
                        return <Plan value={value} key={i} id={i} sendData = {this.handleDelete} />
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;

