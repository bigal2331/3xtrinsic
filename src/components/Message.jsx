import React from 'react';
import UploadFiles from './UploadFiles.jsx'

const MessageForm = (props) => {
    return(
        <form className="messageForm" onSubmit={props.handleSubmit}>
            <UploadFiles currentUser={props.currentUser} socket={props.socket} />
            <input type="text" name="word" value={props.msgSavedInTheStorePassedToProps.message} 
                onChange={(event) => props.setMsgActionPassedToProps(event.target.value)} />
                
            <input type="submit" className="send-btn" value="Send"/>
        </form>
    );
}

export default MessageForm;

