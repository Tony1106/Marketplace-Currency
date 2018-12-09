import React, { Component } from "react";
import { Container, Jumbotron, Input, Button } from "reactstrap";

import { Formik } from "formik";
export default class SignUp extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-center text-primary">Register</h3>
        <Jumbotron>
          <Formik
            initialValues={{ email: "", userName:'',password1: "",password2:'' }}
            validate={values => {
              let errors = {};
              
              if (!values.email) {
                errors.email = "Please type in your Email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              } else if (!values.password1) {
                errors.password1 = "Please type in your password";
                
                console.log(errors);
              }else if(!values.password2){
                errors.password2 = "Please type in your password";
                console.log(errors);
              } else if (values.password1!==values.password2) {
                errors.password2 = "2 password is not the same";
                console.log(errors);
              }
              return errors;
            
            
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("values", values);
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
                  name="password1"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password1}
                />
                <p className="text-danger">
                 
                  {errors.password1 && touched.password1 && errors.password1}
                </p>
                <Input
                  type="password"
                  name="password2"
                  placeholder="Re-type Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password2}
                />
                <p className="text-danger">
                 
                  {errors.password2 && touched.password2 && errors.password2}
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
