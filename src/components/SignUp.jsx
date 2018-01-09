import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import {Link} from "react-router-dom";
import axios from 'axios';
import setToken from '../utils/setAuthToken'
import setCurrentUserAction from '../actions/setCurrentUser.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

class SignUpForm extends Component {
  
  
  singUp(formValues){
    //form values:
    // {firstName: "jeiner", lastName: "noriega", email: "Noriegaj@lighthouseguild.org", password: "123", primaryLang: "spanish"}
    // const c9Url = 'https://converse-app-jnoriega.c9users.io:8081/signup'
    const herokuUrl = 'https://api-onelang.herokuapp.com/signup'
      axios({
      method:'post',
      url:herokuUrl,
      data:{
        email:formValues.email,
        password:formValues.password,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        language: formValues.primaryLang
      }
    }).then((response) => {
      // console.log('this is the response', response);
      // console.log('this is the response', response.data.token);
      // jwt.decode(response.data.token) = {id: 1, email: "Noriegaj@lighthouseguild.org", language: "spanish", iat: 1514474307, exp: 1514474607}
      const {
        setCurrentUserActionPassedToProps,
      } = this.props;
          localStorage.setItem('ApiToken', response.data.token)
          setToken(response.data.token);
          setCurrentUserActionPassedToProps(jwt.decode(response.data.token));

    }).catch(function(err){
      console.log('this is the error in axios', err);
    });
   
  }
  
  render(){
 
    return (
        <div className="singUpContainer">
            <form onSubmit={this.props.handleSubmit(values=>this.singUp(values))}>
              <div>
                  <Field name="firstName" placeholder="First Name"component="input" type="text" />
                </div>
                <div>
                  <Field name="lastName" placeholder="Last Name" component="input" type="text" />
                </div>
                <div>
                  <Field name="email" placeholder="Email" component="input" type="email" />
                </div>
                <div>
                  <Field name="password" placeholder="Password" component="input" type="password" />
                </div>
                <div>
                  <Field name="primaryLang" placeholder="Primary Language" component="input" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
              <Link to="/">
                  <button>Log in</button>
              </Link>
          </div>
    );
  }
}

SignUpForm = reduxForm({
  // a unique name for the form
  form: 'singup'
})(SignUpForm)

  const mapStateToProps = (state) => {
    console.log('this is the state', state)
      return {
          currentUserInTheStorePassedToProps: state.currentUser,
      };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
          setCurrentUserActionPassedToProps: bindActionCreators(setCurrentUserAction, dispatch),
      };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);