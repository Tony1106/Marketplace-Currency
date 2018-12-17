import React, { Component } from "react";
import { Formik } from "formik";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Input,
  Label,
  FormGroup
} from "reactstrap";
import * as A from '../../../redux/money/Action'
import {getType} from 'typesafe-actions'
import {connect} from 'react-redux'
class Sell extends Component {
  state= {
    click: true,
    values: {

    }
  }
  render() {
    return (
      <div>
        <h5>Please input your total money</h5>
        <Form>
          <div>
           
          </div>
        </Form>
        <div>
          <h5>Write your ads to attract customer</h5>
          <Formik
            initialValues={{
              amountMoney:0,
              currencyHave: '',
              currencyWant: '',
              title: "",
              description: "",
              location: "",
              minOffer: 0,
              autoAcceptOffer: 0
            }}
            validate={values => {
              let errors = {};
              if (!values.title) {
                errors.title = "Required Title";
              }
              if (!values.description) {
                errors.description = "Required Decription";
              }
              if (!values.location) {
                errors.location = "Required Location";
              }
              if (!values.minOffer) {
                errors.minOffer = "Required Min Offer";
              }
              if (!values.autoAcceptOffer) {
                errors.autoAcceptOffer = "Required Auto Accept Offer";
              }
              if (values.minOffer >= values.autoAcceptOffer) {
                errors.minOffer = "Min offer must lower than Auto Accept Offer";
              }
              console.log(errors);
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.setState({ data: values });
              this.props.moneySell(values)
              console.log(this.state.values);
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
              <Form onSubmit={handleSubmit}>
               <Input 
               type="number" 
               name="amountMoney"
               value={values.amountMoney}
                    onChange={handleChange}
                    onBlur={handleBlur} 
               />
              <FormGroup>
              <Label>You have</Label>
              <Input 
              type="select" 
              name="currencyHave"
              value={values.currencyHave}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    >
                <option value = 'VND'>VND</option>
                <option value = 'USD'> USD</option>
                <option value = 'AUD'>AUD</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>You want</Label>
              <Input 
              type="select" 
              name="currencyWant"
              value={values.currencyWant}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    >
                <option value = 'VND'>VND</option>
                <option value = 'USD'> USD</option>
                <option value = 'AUD'>AUD</option>
              </Input>
            </FormGroup>
            <div>
              {/* Add props from redux what user type in */}
              <span>20</span>
              <span>$</span>
              <span>=</span>
              <span>1.000.000</span>
              <span>VND</span>
            </div>
                <FormGroup>
                  <Label for="">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p style={{ color: "red" }}>
                    {errors.title && touched.title && errors.title}{" "}
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p style={{ color: "red" }}>
                    {errors.description &&
                      touched.description &&
                      errors.description}{" "}
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label>Location</Label>
                  <Input
                    type="text"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p style={{ color: "red" }}>
                    {errors.location && touched.location && errors.location}{" "}
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label>Min Offer</Label>
                  <Input
                    type="number"
                    name="minOffer"
                    value={values.minOffer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p style={{ color: "red" }}>
                    {errors.minOffer && touched.minOffer && errors.minOffer}{" "}
                  </p>
                </FormGroup>
                <FormGroup>
                  <Label>Auto Accept Offer</Label>
                  <Input
                    type="number"
                    name="autoAcceptOffer"
                    value={values.autoAcceptOffer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p style={{ color: "red" }}>
                    {errors.autoAcceptOffer &&
                      touched.autoAcceptOffer &&
                      errors.autoAcceptOffer}{" "}
                  </p>
                </FormGroup>
                <Button onClick={handleSubmit} disabled={isSubmitting} >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {moneySell: A.createAdvertisingSellMoney.request}
)(Sell)