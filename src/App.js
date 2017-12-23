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
import './styles/main.css';
import io from 'socket.io-client';


const socket = io('https://converse-app-jnoriega.c9users.io:8081');

class App extends Component {
  constructor(props){
    super(props);
    socket.on('result', (translatedMsg) =>this.handleNewMsg(translatedMsg));
  }

  handleNewMsg(msg){
      this.props.sendMsgActionPassedToProps(msg)
  }

  componentDidMount(){
    socket.on('share_user_list', (response) =>{
          this.props.setUserListActionPassedToProps(response.users)
    });
  }
  
    //adds current user to the state and transmits it to the server
  addUserToChat(name,language) {
        const {
          setCurrentUserActionPassedToProps,
        } = this.props;
        let newUser = {id:this.props.usersInTheStorePassedToProps.length , name, language, };

        setCurrentUserActionPassedToProps(newUser);
        this.props.addUserActionPassedToProps(newUser);
        socket.emit('new_user_added',{newUser});
  }


    //submits the new message and adds it to the chat locally
  handleSubmit(event) {
        event.preventDefault();
        this.props.sendMsgActionPassedToProps({
            sender:"Me",
            translation:this.props.msgSavedInTheStorePassedToProps.message,
            isPicMsg: false
          }
        );
        socket.emit('chat message',
          {
            author:this.props.currentUserInTheStorePassedToProps,
            msg: this.props.msgSavedInTheStorePassedToProps.message, 
            isPicMsg: false
          }
        );
        this.props.clearMsgActionPassedToProps();
    }
    
  showComponents(){
    let sideBar = document.querySelector('.side-bar');
    let header = document.querySelector('.App-header');
    sideBar.classList.toggle('show-side-bar');
    header.classList.toggle('App-header-shift');
  }
    
    render() {

      
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><span className="oneText">One</span>Lang</h1>
            
            <span className="icon" onClick={this.showComponents}>&#9776;</span>
          </header>
            <div className="side-bar">
              <div className="newUserFields">
                <input ref={node => {this.input = node}} />
                <input ref={node => {this.lang = node}} />
                <button onClick={()=>this.addUserToChat(this.input.value, this.lang.value)}>
                  Add User
                </button>
              </div>
              <div className="activeUsers">
                <ListOfUsersChatting users={this.props.usersInTheStorePassedToProps}/>
              </div>
            </div>
              
              
            <Chat msgSavedInTheStorePassedToProps={this.props.msgSavedInTheStorePassedToProps}/>
            <MessageForm 
              currentUser={this.props.currentUserInTheStorePassedToProps}
              socket={socket}
              handleSubmit={(event) =>this.handleSubmit(event)} 
              msgSavedInTheStorePassedToProps={this.props.msgSavedInTheStorePassedToProps} 
              setMsgActionPassedToProps={this.props.setMsgActionPassedToProps}
            />
            
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


