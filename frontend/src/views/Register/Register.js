import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../../common/components/Input';
import Button from '../../common/components/Button';

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .max(64, 'Name must be 64 characters or less')
    .required('Please enter your first name'),
  last_name: Yup.string()
    .trim()
    .max(64, 'Name must be 64 characters or less')
    .required('Please enter your last name'),
  email: Yup.string()
    .trim()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .min(6)
    .required('Please enter a password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Confirm Password is required'),
});

class Register extends Component {
  static propTypes = {
    registerUser: PropTypes.func.isRequired,
  };

  state = {
    error: null,
  };

  renderForm = ({ touched, errors, isSubmitting }) => (
    <Form className="register-form">
      <Input
        type="text"
        name="first_name"
        maxLength="64"
        label="First Name"
        required
        validation={touched.first_name && errors.first_name}
      />
      <Input
        type="text"
        name="last_name"
        maxLength="64"
        label="Last Name"
        required
        validation={touched.last_name && errors.last_name}
      />
      <Input
        type="email"
        name="email"
        maxLength="64"
        label="Email"
        required
        validation={touched.email && errors.email}
      />
      <Input
        type="password"
        name="password"
        maxLength="64"
        minLength="6"
        label="Password"
        required
        validation={touched.password && errors.password}
      />
      <Input
        type="password"
        name="confirmPassword"
        maxLength="64"
        minLength="6"
        label="Confirm Password"
        required
        validation={touched.confirmPassword && errors.confirmPassword}
      />
      <Button type="submit" primary stretch disabled={isSubmitting}>
        Sign Up
      </Button>
      {this.props.error && <div className="form-error">{this.props.error}</div>}
    </Form>
  );

  render() {
    return (
      <div className="register">
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setFieldValue, setFieldTouched }) => {
            this.props.registerUser(values).then(action => {
              if (!action.response.ok) {
                if (!action.response.ok) {
                  setFieldValue('password', '');
                  setFieldValue('confirmPassword', '');
                  setFieldTouched('password', false);
                  setFieldTouched('confirmPassword', false);
                }
              }
              setSubmitting(false);
            });
          }}
          render={this.renderForm}
        />
      </div>
    );
  }
}

export default Register;
