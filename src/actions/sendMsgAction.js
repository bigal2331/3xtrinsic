import { SEND_MSG } from './actionTypes.js';
// import axios from 'axios';
// import io from 'socket.io-client';

// const sendMsgToServer = (msg) => {
    
    
//   return (dispatch) => {
    
//       // axios({
//       //   method:'post',
//       //   url:'https://converse-app-jnoriega.c9users.io:8081',
//       //   data: {
//       //     word: msg
//       //   }
//       // })
//       // .then((response) => {
//       //   let translation = response.data.translation;
//       //   dispatch(sendMsg(translation));
        
        
//       // }).catch(function(err){
//       //   console.log('this is the error', err);
//       // })

      
//   }
// }

function sendMsg (translation){
    return {
        type: SEND_MSG,
        payload:translation
    }
}

// export default sendMsgToServer;
export default sendMsg;