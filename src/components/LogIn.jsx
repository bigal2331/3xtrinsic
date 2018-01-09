import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from "react-router-dom";
import axios from 'axios';
import setToken from '../utils/setAuthToken'
import PropTypes from 'prop-types';
import setCurrentUserAction from '../actions/setCurrentUser.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "../styles/login.css"
import jwt from 'jsonwebtoken';

class LogInForm extends Component {


  logIn(formValues){
    //form values:
    // {firstName: "jeiner", lastName: "noriega", email: "Noriegaj@lighthouseguild.org", password: "123", primary-lang: "spanish"}
    const c9Url = 'https://converse-app-jnoriega.c9users.io:8081/login'
    const herokuUrl = 'https://api-onelang.herokuapp.com/login'
      axios({
        method:'post',
        url:herokuUrl,
        data: {
          email:formValues.email,
          password:formValues.password
        }
      }).then((response) => {
        console.log('this is the response', response);
        // console.log('this is the response', response.data.token);
         const {
          setCurrentUserActionPassedToProps,
        } = this.props;
            localStorage.setItem('ApiToken', response.data.token)
            setToken(response.data.token);
            setCurrentUserActionPassedToProps(jwt.decode(response.data.token));
            this.props.history.push("/chat");
        // console.log('this is the local-storage ', localStorage);
      }).catch(function(err){
        console.log('this is the error in axios', err);
      });
    console.log('these are the values to log in', formValues);
  };
  
  render(){
      return (
        <div className="logInContainer">
          <form onSubmit={this.props.handleSubmit(values=> this.logIn(values))}>
              <div>
                
                <Field name="email" placeholder="Enter your email" component="input" type="email" />
              </div>
              <div>
      
                <Field name="password" placeholder="Enter your password" component="input" type="password" />
              </div>
              <button type="submit">Submit</button>
          </form>
          <Link to="/signup">
            <button className="singUpBtn">Sign Up</button>
          </Link>
        </div>
      ); 
  }

  
}

LogInForm.contextTypes = {
        router: PropTypes.object.isRequired
    };
LogInForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LogInForm);

  const mapStateToProps = (state) => {
    console.log('this is the state', state);
      return {
          currentUserInTheStorePassedToProps: state.currentUser,
      };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
          setCurrentUserActionPassedToProps: bindActionCreators(setCurrentUserAction, dispatch),
      };
  };

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
