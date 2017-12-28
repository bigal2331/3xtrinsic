import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from "react-router-dom";
import axios from 'axios';

let LogInForm = props => {
  const { handleSubmit } = props;

   const logIn = (formValues)=>{
    //form values:
    // {firstName: "jeiner", lastName: "noriega", email: "Noriegaj@lighthouseguild.org", password: "123", primary-lang: "spanish"}
       axios({
         method:'post',
        url:'https://converse-app-jnoriega.c9users.io:8081/login',
         data: {
          email:formValues.email,
          password:formValues.password
         }
      }).then((response) => {
        console.log('this is the response', response);
        // console.log('this is the response', response.data.token);
        
            localStorage.setItem('ApiToken', response.data.token)
        // console.log('this is the local-storage ', localStorage);
      }).catch(function(err){
        console.log('this is the error in axios', err);
      });
    console.log('these are the values to log in', formValues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(values=>logIn(values))}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" />
          </div>
          <button type="submit">Submit</button>
          
      </form>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
  
};
LogInForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LogInForm)

export default LogInForm;