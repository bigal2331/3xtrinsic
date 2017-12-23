import React from 'react';

const Chat = (props) =>{
    return(
           <section className="chatWindow">
            
            {props.msgSavedInTheStorePassedToProps.conversation.map((msg,idx) => {
                console.log('this is the msg test', msg.isPicMsg);
                if(msg.isPicMsg){
                   return (
                    <li className="translatedMsg" key={idx}>
                     {msg.sender}:
                     <img className="picMsg" src={msg.translation} alt="img sent" />
                    </li>)
                }else{
                    return <li className="translatedMsg" key={idx}>{msg.sender}:{msg.translation}</li>
                }
            })
            }
          </section> 
    );
}

export default Chat;