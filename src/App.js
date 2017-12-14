import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Chat from './components/Chat.jsx'
import MessageForm from './components/Message.jsx'
import ListOfUsersChatting from './components/ListOfUsersChatting.jsx'
import sendMsgAction from './actions/sendMsgAction.js'
import setMsgAction from './actions/setMsgAction.js'
import clearMsgAction from './actions/clearMsgAction.js'
import addUserAction from './actions/addUserAction.js'
import { bindActionCreators } from 'redux'
import './App.css';



class App extends Component {
  componentDidMount() {
    
    this.props.socket.on('share_user_list', (response) =>{
      console.log('i received the user list', response.users)
      let newUser;
      if(response.users.length === 0){
        newUser = {
          id:response.users.length,
          name: 'TestUser_' + response.users.length,
          language:'English'
        }
        this.props.socket.emit('new_user_added',{newUser})
      }else{
        newUser = {
          id:response.users.length++,
          name: 'TestUser_' + response.users.length,
          language:'English'
        }
        this.props.socket.emit('new_user_added',{newUser})
      }
      
    });
    
    let newUserId = this.props.usersInTheStorePassedToProps.length;
    
    // let newUser = {
    //   id:newUserId,
    //   name: 'TestUser_' + newUserId++,
    //   language:'English'
    // }
    
    // this.props.addUserActionPassedToProps(newUser);
  }
  handleSubmit(event) {
    event.preventDefault();
    // props.sendMsgToServerPassedToProps(props.msgSavedInTheStorePassedToProps.message);
    this.props.sendMsgActionPassedToProps(this.props.msgSavedInTheStorePassedToProps.message)
    this.props.socket.emit('chat message',{msg: this.props.msgSavedInTheStorePassedToProps.message});
    this.props.socket.once('result', (response) =>{
      console.log('i received a message')
      this.props.sendMsgActionPassedToProps(response.translation)
    });
    this.props.clearMsgActionPassedToProps();
  }
  

  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">OneLang</h1>
          </header>
            <Chat msgSavedInTheStorePassedToProps={this.props.msgSavedInTheStorePassedToProps}/>
            <MessageForm 
              handleSubmit={(event) =>this.handleSubmit(event)} 
              msgSavedInTheStorePassedToProps={this.props.msgSavedInTheStorePassedToProps} 
              setMsgActionPassedToProps={this.props.setMsgActionPassedToProps}
            />
            <ListOfUsersChatting users={this.props.usersInTheStorePassedToProps}/>
        </div>
      );
    }
  }


const mapStateToProps = (state) => {
  console.log('this is the state', state)
    return {
        msgSavedInTheStorePassedToProps: state.msgStateInTheStore,
        usersInTheStorePassedToProps: state.userListInTheStore.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        // sendMsgToServerPassedToProps: (msg) => dispatch(sendMsgToServer(msg)),
        setMsgActionPassedToProps: bindActionCreators(setMsgAction, dispatch),
        sendMsgActionPassedToProps: bindActionCreators(sendMsgAction, dispatch),
        clearMsgActionPassedToProps: bindActionCreators(clearMsgAction, dispatch),
        addUserActionPassedToProps: bindActionCreators(addUserAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


