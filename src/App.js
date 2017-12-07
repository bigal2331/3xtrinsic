import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      message:"",
      conversation:[]
    }
  }
  
  handleChange = (text) => {
    this.setState({message:text})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
      axios({
        method:'post',
        url:'https://converse-app-jnoriega.c9users.io:8081',
        data: {
          word: this.state.message
        }
      })
      .then((response) => {
        let translation = response.data.translation;
        this.setState({...this.state,message:"",conversation:[...this.state.conversation,translation]},
        ()=>console.log('this is the new state',this.state))
      }).catch(function(err){
        console.log('this is the error', err);
      })
  }
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          
          <h1 className="App-title">Extrinsic</h1>
          
        </header>
          <div>
            {this.state.conversation.map((msg,idx) => <div className="translatedMsg" key={idx}>{msg}</div> )}
          </div>
          <form onSubmit={(event)=>this.handleSubmit(event)}>
            <input type="text" name="word" value={this.state.message} onChange={(event) => this.handleChange(event.target.value)} />
            <input type="submit"/>
            
          </form>
      </div>
    );
  }
}

export default App;

