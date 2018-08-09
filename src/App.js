import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    console.log("check");
    var t = ReactDom.findDOMNode(this.refs.theInput).value + " ccc";
    this.setState({
      // name:"rest"
      inputValue:t
      
    });
  }  

  // updateInputValue(evt) {
  //   this.setState({
  //     inputValue: evt.target.value 
  //   });
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <form>
              
            <div className="form-group">
              <label>To Do <span></span></label>
              <input type="text" ref="theInput"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter to do note" autoComplete="off"  />
              <span id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</span>
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={this.handleClick }>Submit</button>
          </form>
          <div className="row">
    <ul className="row">
      <li className="col-md-12">{this.state.inputValue}</li>
    </ul>
    </div>
       {/* <ToDoList/>*/}
        </div>
      </div>
    );
  }
}


class ToDoList extends Component{
render(){
  return(
    <div className="row">
    <ul className="row">
      <li className="col-md-12">test list</li>
    </ul>
    </div>
  )
}

}

export default App;
