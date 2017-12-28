import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent){
    class Authenticate extends Component{
        componentWillMount(){
            console.log('is the person authenticated?', this.props.isAuthenticated)
            if(!this.props.isAuthenticated){
                //if not authenticated then redirect to login page
                this.context.router.history.push('/')
            }
        }
        
        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                 this.context.router.history.push('/')
            }
        }
        
        render(){
            return(
                <ComposedComponent {...this.props} />
            );
        }
    
    }
    
    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    };
  const mapStateToProps = (state) => {
      return {
          isAuthenticated: state.currentUser.isAuthenticated,
      };
  };
 
    
    return connect(mapStateToProps)(Authenticate);
}
