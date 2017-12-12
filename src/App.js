import React from 'react';
import { connect } from 'react-redux';
import sendMsgToServer from './actions/sendMsgAction.js'
import setMsgAction from './actions/setMsgAction.js'
import clearMsgAction from './actions/clearMsgAction.js'
import { bindActionCreators } from 'redux'
import './App.css';


const App =(props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    props.sendMsgToServerPassedToProps(props.msgStateInTheStorePassedToProps.message);
    
    props.clearMsgActionPassedToProps();
    
  }
  
  
    return (
      <div className="App">
        
        <header className="App-header">
          
          <h1 className="App-title">3xtrinsic</h1>
           
        </header>
          <div>
            {console.log('this is the conversation in state', props.msgStateInTheStorePassedToProps.conversation)}
            {props.msgStateInTheStorePassedToProps.conversation.map((msg,idx) => <div className="translatedMsg" key={idx}>{msg}</div> )}
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="word" value={props.msgStateInTheStorePassedToProps.message} onChange={(event) => props.setMsgActionPassedToProps(event.target.value)} />
            <input type="submit"/>
            
          </form>
      </div>
    );
  }


const mapStateToProps = (state) => {
  console.log('this is the state', state)
    return {
        msgStateInTheStorePassedToProps: state.msgStateInTheStore
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        sendMsgToServerPassedToProps: (msg) => dispatch(sendMsgToServer(msg)),
        setMsgActionPassedToProps: bindActionCreators(setMsgAction, dispatch),
        clearMsgActionPassedToProps: bindActionCreators(clearMsgAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


