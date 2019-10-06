import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../../common/components/Input';
import Button from '../../common/components/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .required('Please enter a password'),
});

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  renderForm = ({ touched, errors, isSubmitting }) => (
    <Form className="register-form">
      <Input type="email" name="email" maxLength="64" label="Email" validation={touched.email && errors.email} />
      <Input
        type="password"
        name="password"
        maxLength="64"
        minLength="6"
        label="Password"
        validation={touched.password && errors.password}
      />
      <Button type="submit" primary stretch disabled={isSubmitting}>
        Login
      </Button>
      {this.props.error && <div className="form-error">{this.props.error}</div>}
    </Form>
  );

  render() {
    const { login } = this.props;

    return (
      <div className="register">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setFieldValue, setFieldTouched }) => {
            login(values).then(action => {
              if (!action.response.ok) {
                setFieldValue('password', '');
                setFieldTouched('password', false);
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

export default Login;
