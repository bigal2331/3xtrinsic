import React, { Component } from 'react';
import axios from 'axios';
import setMsgAction from '../actions/setMsgAction.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UploadFiles extends Component{

    
    handleUploadFile = (event) => {
    const data = new FormData();
    const c9Url = 'https://converse-app-jnoriega.c9users.io:8081/files'
    const herokuUrl = 'https://api-onelang.herokuapp.com/files'
    data.append('file', event.target.files[0]);
    axios({
         method:'post',
         url:herokuUrl,
         data
      }).then((response) => {
          this.props.socket.emit('chat message',
          {author:this.props.currentUser,
          msg: response.data.url, isPicMsg:true}
        );
    });
   
    }
   
    pickEmoji = (event) => {
        const emojiPicker = document.querySelector('.emojiPicker');
        
            emojiPicker.classList.toggle('unHideEmojiMart')
    }
 
    render(){
        
        return(
            <span>
                    
                <span className="showEmojiPicker" onClick={event => this.pickEmoji(event)}>&#x263A;</span>
                 <label className="upload-btn">
                    <input type="file" onChange={this.handleUploadFile} name="upload" className="file-upload"/>
                    +
                </label>
            </span>
        )
    }
}



  const mapStateToProps = (state) => {
    console.log('this is the state.msgStateInTheStore', state.msgStateInTheStore)
      return {
          msgSavedInTheStorePassedToProps: state.msgStateInTheStore,
          
      };
  };

  const mapDispatchToProps = (dispatch) => {
      return {
          setMsgActionPassedToProps: bindActionCreators(setMsgAction, dispatch),
          
      };
  };

export default connect(mapStateToProps, mapDispatchToProps)(UploadFiles);