import React, { Component } from "react";
import { Container, Jumbotron, Input, Button } from "reactstrap";
import * as A from "../../redux/user/Action";
import { connect } from "react-redux";
import { Formik } from "formik";
import Spinning from '../../components/Loading/Spinning'
class SignIn extends Component {
  state = {
    isLoading: false
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.userProfile.isLoading !== this.state.isLoading) {
      this.setState({isLoading: !this.state.isLoading})
    }
   }
  render() {
    console.log(this.props, 'prop');
  
    return (
      <Container>
        {this.state.isLoading? <Spinning/>: null}
        <h3 className="text-center text-primary">Sign In</h3>
        <Jumbotron>
          <Formik
            initialValues={{ email: "", password: "" }}
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
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("values", values);
              this.props.loginWithEmailAndPassword(values);
              this.setState({isLoading: true})
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="text-danger">
                  {" "}
                  {errors.password && touched.password && errors.password}
                </p>

                <Button block type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Jumbotron>
      </Container>
    );
  }
}

export default connect(
  (state) => {
    return {
      userProfile: state.user,
    }
  },
  { loginWithEmailAndPassword: A.loginWithEmailAndPassword.request }
)(SignIn);
