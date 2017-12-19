import React from 'react';

const MessageForm = (props) => {
    return(
        <form className="messageForm" onSubmit={props.handleSubmit}>
            <input type="text" name="word" value={props.msgSavedInTheStorePassedToProps.message} 
                onChange={(event) => props.setMsgActionPassedToProps(event.target.value)} />
            <input type="submit" className="send-btn" value="Send"/>
        </form>
    );
}

export default MessageForm;

