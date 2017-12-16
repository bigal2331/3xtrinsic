import React from 'react';


const Chat = (props) =>{
    return(
           <section className="chatWindow">
            {console.log('this is the conversation in state', props.msgSavedInTheStorePassedToProps.conversation)}
            {props.msgSavedInTheStorePassedToProps.conversation.map((msg,idx) => <li className="translatedMsg" key={idx}>{msg.sender}:{msg.translation}</li> )}
          </section> 
    );
}

export default Chat;