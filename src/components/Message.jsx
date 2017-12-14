import React from 'react';

const MessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="word" value={props.msgSavedInTheStorePassedToProps.message} 
                onChange={(event) => props.setMsgActionPassedToProps(event.target.value)} />
            <input type="submit"/>
        </form>
    );
}

export default MessageForm;

