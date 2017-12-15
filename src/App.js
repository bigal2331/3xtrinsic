import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Chat from './components/Chat.jsx'
import MessageForm from './components/Message.jsx'
import ListOfUsersChatting from './components/ListOfUsersChatting.jsx'
import sendMsgAction from './actions/sendMsgAction.js'
import setMsgAction from './actions/setMsgAction.js'
import clearMsgAction from './actions/clearMsgAction.js'
import addUserAction from './actions/addUserAction.js'
import setUserListAction from './actions/setUserList.js'
import setCurrentUserAction from './actions/setCurrentUser.js'
import { bindActionCreators } from 'redux'
import './App.css';



class App extends Component {

    //gets the initial list of users and sets the state's active users list
    componentDidMount() {
        this.props.socket.on('share_user_list', (response) =>{
          this.props.setUserListActionPassedToProps(response.users)
        });
    }
  

    //adds current user to the state and transmits it to the server
    addUserToChat(name,language) {
        let newUser = {id:this.props.usersInTheStorePassedToProps.length , name:name, language:language};
        this.props.setCurrentUserActionPassedToProps(newUser);
        this.props.addUserActionPassedToProps(newUser);
        this.props.socket.emit('new_user_added',{newUser});
    }


    //submits the new message and adds it to the chat locally
    handleSubmit(event) {
        event.preventDefault();
        this.props.sendMsgActionPassedToProps({
          sender:"Me",
          translation:this.props.msgSavedInTheStorePassedToProps.message}
        );
        this.props.socket.emit('chat message',
          {author:this.props.currentUserInTheStorePassedToProps,
          msg: this.props.msgSavedInTheStorePassedToProps.message}
        );
          
        this.props.socket.once('result', (translatedMsg) =>{
          this.props.sendMsgActionPassedToProps(translatedMsg)
        });
        this.props.clearMsgActionPassedToProps();
    }
    
  
    
    render() {
      let input;
      let lang;
      
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">OneLang</h1>
          </header>
            
              <input ref={node => {this.input = node}} />
              <input ref={node => {this.lang = node}} />
              <button onClick={()=>this.addUserToChat(this.input.value, this.lang.value)}>
                Add User
              </button>
            
              
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
            usersInTheStorePassedToProps: state.userListInTheStore.users,
            currentUserInTheStorePassedToProps: state.userListInTheStore.currentUser,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            
            
            setMsgActionPassedToProps: bindActionCreators(setMsgAction, dispatch),
            sendMsgActionPassedToProps: bindActionCreators(sendMsgAction, dispatch),
            clearMsgActionPassedToProps: bindActionCreators(clearMsgAction, dispatch),
            addUserActionPassedToProps: bindActionCreators(addUserAction, dispatch),
            setCurrentUserActionPassedToProps: bindActionCreators(setCurrentUserAction, dispatch),
            setUserListActionPassedToProps: bindActionCreators(setUserListAction, dispatch),
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(App);


