import React, { Component } from "react";
import { Container, Jumbotron, Input, Button } from "reactstrap";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import * as A from '../../redux/user/Action'
import { Formik } from "formik";
import Spinning from '../../components/Loading/Spinning'
class SignUp extends Component {
  state = {
    isLoading: false
  }

     
  componentWillReceiveProps(nextProps) {
    if(nextProps.userProfile.isLoading !== this.state.isLoading) {
      this.setState({isLoading: !this.state.isLoading})
    }
   }
  render() {
    if(this.props.userProfile.isLoggedIn) {
      return <Redirect to='/marketplace'/>
    } else {

    
    return (
      <Container>
        {this.state.isLoading? <Spinning/>: null}
        <h3 className="text-center text-primary">Register</h3>
        <Jumbotron>
          <Formik
            initialValues={{ email: "", userName:'',password: "",rePassword:'' }}
            validate={values => {
              let errors = {};
              
              if (!values.email) {
                errors.email = "Please type in your Email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              } else if (!values.password) {
                errors.password = "Please type in your password";
                
                console.log(errors);
              }else if(!values.rePassword){
                errors.rePassword = "Please type in your password";
                console.log(errors);
              } else if (values.password!==values.rePassword) {
                errors.rePassword = "2 password is not the same";
                console.log(errors);
              }
              return errors;
            
            
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("values", values);
              this.props.signUpWithEmailAndPassWord(values);
              this.setState({isLoading: true});
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="text-danger">
                  {errors.email && touched.email && errors.email}
                </p>

                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="text-danger">
                 
                  {errors.password && touched.password && errors.password}
                </p>
                <Input
                  type="password"
                  name="rePassword"
                  placeholder="Re-type Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.rePassword}
                />
                <p className="text-danger">
                 
                  {errors.rePassword && touched.rePassword && errors.rePassword}
                </p>

                <Button block type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Jumbotron>
      </Container>
    )};
  }
}

export default withRouter(connect(
  (state) => {
    return {
      userProfile: state.user,
    }
  },
 {signUpWithEmailAndPassWord: A.signUpWithEmailAndPassword.request}
)(SignUp))