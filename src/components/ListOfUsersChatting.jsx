import React, { Component } from 'react';
import { connect } from 'react-redux';
import setCurrentUserAction from '../actions/setCurrentUser.js'
import { bindActionCreators } from 'redux';
import setToken from '../utils/setAuthToken'

class ListOfUsersChatting extends Component {


    logOut(e){
         const {
          setCurrentUserActionPassedToProps
        } = this.props;
        localStorage.removeItem('ApiToken');
        setToken(false)
        setCurrentUserActionPassedToProps({});
        
    }
    
    render(){
        return(
            <div>
                <div>
                    Active Users: {this.props.users.map((user) =>  <div key={user.id}>{user.email}</div>)}
                </div>
                <div>
                   <button onClick={(e)=>this.logOut(e)}>Log out</button>
                </div>
            </div>
          
        );     
    }

}

  const mapDispatchToProps = (dispatch) => {
      return {
          setCurrentUserActionPassedToProps: bindActionCreators(setCurrentUserAction, dispatch)
      };
  };

export default connect(null, mapDispatchToProps)(ListOfUsersChatting);

