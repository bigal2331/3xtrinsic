import React from 'react';


const Chat = (props) =>{
    return(
           <div>
            {console.log('this is the conversation in state', props.msgSavedInTheStorePassedToProps.conversation)}
            {props.msgSavedInTheStorePassedToProps.conversation.map((msg,idx) => <div className="translatedMsg" key={idx}>{msg.sender}:{msg.translation}</div> )}
          </div> 
    );
}

export default Chat;