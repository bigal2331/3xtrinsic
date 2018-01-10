import React, { Component } from 'react';
import axios from 'axios';
import sendMsgAction from '../actions/sendMsgAction.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UploadFiles extends Component{

    
    handleUploadFile = (event) => {
        const data = new FormData();
        // const c9Url = 'https://converse-app-jnoriega.c9users.io:8081/files'
        const herokuUrl = 'https://api-onelang.herokuapp.com/files'
        data.append('file', event.target.files[0]);
        axios({
             method:'post',
             url:herokuUrl,
            //  url:c9Url,
             data
          }).then((response) => {
            
            this.props.sendMsgActionPassedToProps({
                sender:"Me",
                translation:response.data.url,
                isPicMsg: true
              }
            );
            
            
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
                    
                <span className="showEmojiPicker" onClick={event => this.pickEmoji(event)}>&#9786;</span>
                 <label className="upload-btn">
                    <input type="file" onChange={this.handleUploadFile} name="upload" className="file-upload"/>
                    +
                </label>
            </span>
        )
    }
}




  const mapDispatchToProps = (dispatch) => {
      return {
          sendMsgActionPassedToProps: bindActionCreators(sendMsgAction, dispatch),
      };
  };

export default connect(null, mapDispatchToProps)(UploadFiles);