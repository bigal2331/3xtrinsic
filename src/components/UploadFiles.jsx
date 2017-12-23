import React, { Component } from 'react';
import axios from 'axios';


class UploadFiles extends Component{
    handleUploadFile = (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios({
         method:'post',
         url:'https://converse-app-jnoriega.c9users.io:8081/files',
         data
      }).then((response) => {
          this.props.socket.emit('chat message',
          {author:this.props.currentUser,
          msg: response.data.url, isPicMsg:true}
        );
            // console.log(response); // do something with the response
    });
   
    }
    
    // constructor(props){
    //     super(props);
    //     this.props.socket.on('picMsg', function (picMsg) {
    //         console.log('this is the file received', picMsg.file)
    //         var options = {};
    //         options.file = true;
            
    //         //<img class='chat-image' src="${picMsg.file}"> ***this should work
    //         // msgHandler.processChatMessage(data, options);
    //     });
    // }
    // handleUploadFile = (event) => {
    //     event.preventDefault();
    //     const socket = this.props.socket;
    //     const currentUser = this.props.currentUser;
    //     const data = event.target.files[0];
    //     const reader = new FileReader();
    //     const msg ={};
    //     reader.onload = function(file){
            
    //         msg.author = currentUser;
    //         msg.file = file.target.result;
    //         socket.emit('picMsg', msg);
    //     };
    //     reader.readAsDataURL(data);
    // }
    render(){
        
        return(
             <label className="upload-btn">
                <input type="file" onChange={this.handleUploadFile} name="upload" className="file-upload"/>
                +
            </label>
        )
    }
}

export default UploadFiles;