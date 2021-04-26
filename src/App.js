import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      initCount : 5
  
    }
  }

  setIntCount=(value)=>{
    this.setState({initCount:value})
  }

  render() {
    return (
      <div>
        <Counter2 initCount={this.state.initCount} ChangeInitCount={this.setIntCount} />

      </div>
    );


  }
  
}

class Counter extends React.Component 
{

  constructor(){
    super();
    this.state = {
      count : 0,
  
    }
  }

  increase=()=>{
    this.setState({count:this.state.count +1 });
  }
  decrease=()=>{
    this.setState({count:this.state.count -1 });
  }
  render() {
    return (
      <div>
        <div> {this.state.count}</div>
      <button onClick={this.increase}> Increase</button>
      <button onClick={this.decrease}> Decrease</button>

      </div>
      
    );


  }

}

class Counter2 extends React.Component 
{

  constructor(props){
    super();
    this.state = {
      count :props.initCount,
  
    }
  }

  ChangeCount=(op)=>{
    if(op == "+")
    this.setState({count:this.state.count +1 });
    else if(op == "-")
    this.setState({count:this.state.count -1 });

    this.props.ChangeInitCount(18)

  }
  
  render() {
    return (
      <div>
        <div> {this.state.count}</div>
      <button onClick={()=>this.ChangeCount("+")}> Increase</button>
      <button onClick={()=>this.ChangeCount("-")}> Decrease</button>

      </div>
      
    );


  }

}



/*
class App extends React.Component {
constructor(){
  super();
  this.state = {
    name : "Ahmed",

  }
}

ChangeName=()=>{
  this.setState({name:"Mohamed"});
}
  



  render() {
    return (
      <div>
          Welcome  samar {this.state.name}
        <button onClick={this.ChangeName}> ChangeName</button>

          <Footer/>

      </div>
    );


  }
  
}


class Footer extends React.Component {

  render() {
    return (
      <div>
          copy right 2021
      </div>
    );


  }

}

*/

export default App;
