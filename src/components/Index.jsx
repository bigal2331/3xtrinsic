import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Chat from './Chat.jsx';
import MessageForm from './Message.jsx';
import { Picker } from 'emoji-mart';
import ListOfUsersChatting from './ListOfUsersChatting.jsx';
import sendMsgAction from '../actions/sendMsgAction.js';
import setMsgAction from '../actions/setMsgAction.js';
import clearMsgAction from '../actions/clearMsgAction.js';
import addUserAction from '../actions/addUserAction.js';
import setUserListAction from '../actions/setUserList.js';
import setCurrentUserAction from '../actions/setCurrentUser.js';
import { bindActionCreators } from 'redux';
import '../styles/main.css';
import io from 'socket.io-client';


// const c9Url= 'https://converse-app-jnoriega.c9users.io:8081';
const herokuUrl = 'https://api-onelang.herokuapp.com/';
const socket = io(herokuUrl);
// const socket = io('https://git.heroku.com/api-onelang.git');

class Index extends Component {
  
  handleNewMsg(msg){
      this.props.sendMsgActionPassedToProps(msg);
  }

  componentDidMount(){
    socket.on('share_user_list', (response) =>{
          this.props.setUserListActionPassedToProps(response.users);
    });
    socket.on('result', (translatedMsg) =>this.handleNewMsg(translatedMsg));
  }
  
    //adds current user to the state and transmits it to the server
  addUserToChat() {
        const {
          currentUserInTheStorePassedToProps,
        } = this.props;
        // let newUser = {id:this.props.usersInTheStorePassedToProps.length , name, language, };

        // setCurrentUserActionPassedToProps(newUser);
        this.props.addUserActionPassedToProps(currentUserInTheStorePassedToProps);
        socket.emit('new_user_added',{newUser:currentUserInTheStorePassedToProps});
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
        if(document.querySelector('.unHideEmojiMart') !== null){
           document.querySelector('.unHideEmojiMart').className ='emojiPicker'
        }
       
    }
    
     addEmoji= (emoji,event)=>{
        const { setMsgActionPassedToProps, msgSavedInTheStorePassedToProps } = this.props;
        setMsgActionPassedToProps(msgSavedInTheStorePassedToProps.message + emoji.native);
    }
    

    
    render() {

      
      return (
        
        <div className="App">
            <div className="side-bar">
             
              <div className="activeUsers">
                              <button onClick={()=>this.addUserToChat()}>
                 Join Chat
                </button>
                <ListOfUsersChatting users={this.props.usersInTheStorePassedToProps}/>
              </div>
            </div>
              
              
            <Chat msgSavedInTheStorePassedToProps={this.props.msgSavedInTheStorePassedToProps}/>
            <div className="emojiPicker">
                        <Picker className="emojiPicker" skin={4} set='emojione' size={16} onClick={(emoji,event) => this.addEmoji(emoji,event)} />
            </div>
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
          currentUserInTheStorePassedToProps: state.currentUser.currentUser,
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);


