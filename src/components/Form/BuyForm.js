import React, { Component } from "react";
import { Formik } from "formik";
import {
  Button,
  Form,
  Input,
  Label,
  FormGroup
} from "reactstrap";
import styles from "./buyForm.module.css";

export default class BuyForm extends Component {
  state= {
    value: {}
}
  render() {
    return (
        <Formik
        initialValues={{
          amountMoney: 0,
          currencySell: "AUD",
          currencyBuy: "VND",
          title: "",
          liveRate:16000,
          description: "",
          location: "",
          minOffer: 0,
          autoAcceptOffer: 0,
          type: 'Buy'
        }}
        validate={values => {
          let errors = {};
          if (!values.amountMoney) {
            errors.amountMoney = "Please input your total money";
          }
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
        onSubmit={(values, { setSubmitting }, e) => {

          this.setState({ data: values });
          this.props.onChange(values);

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
          <Form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.headline}>
              <h5>What curreny do you want to Buy</h5>
            </div>
            <div className={styles.initialNumber}>
              <div className={styles.formWrap}>
                <h5>The currency you buy</h5>
                <div className={styles.input}>
                  <Input
                    type="number"
                    name="amountMoney"
                    value={values.amountMoney}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                 
                  <Input
                    type="select"
                    name="currencySell"
                    value={values.currencySell}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="VND">VND</option>
                    <option value="USD"> USD</option>
                    <option value="AUD">AUD</option>
                  </Input>
                </div>
                <p className={styles.warningText}>
                    {errors.amountMoney &&
                      touched.amountMoney &&
                      errors.amountMoney}{" "}
                  </p>

              </div>
              <div className={styles.formWrap}>
                <h5>The currency you paid</h5>
                <div className={styles.output}>
                  {" "}
                  <Input
                    type="number"
                    name="liveRate"
                    value= {values.liveRate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled
                  />
                  <Input
                    type="select"
                    name="currencyBuy"
                    value={values.currencyBuy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  >
                    <option value="VND">VND</option>
                    <option value="USD"> USD</option>
                    <option value="AUD">AUD</option>
                  </Input>
                </div>
              </div>
            </div>
            <hr className={styles.line}/> 
            <div className={styles.showRate}>
              {/* Add props from redux what user type in */}
              <span>20 </span>
              <span>$</span>
              <span> = </span>
              <span>1.000.000</span>
              <span>VND</span>
            </div>
            <div className={styles.headline}>
              <h5>Write your ads to attract Seller</h5>
            </div>
              <div className={styles.adWraper}>
              <FormGroup>
              <Label for="">Title</Label>
              <Input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className={styles.warningText}>
                {errors.title && touched.title && errors.title}{" "}
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="textarea"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className={styles.warningText}>
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
              <p className={styles.warningText}>
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
              <p className={styles.warningText}>
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
              <p className={styles.warningText}>
                {errors.autoAcceptOffer &&
                  touched.autoAcceptOffer &&
                  errors.autoAcceptOffer}{" "}
              </p>
            </FormGroup>
              </div>
            <div className={styles.buttonWrap}>
            <Button onClick={handleSubmit} disabled={isSubmitting} className={styles.buttonSubmit}>
              Submit
            </Button>
            </div>
            
          </Form>
        )}
      </Formik>
   
    )
  }
}
