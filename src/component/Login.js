import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {submit} from '../actions/index';
import {Container,
        Button,
        Col,
        Input} from 'reactstrap';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="login-wrapper">
    <label>{label}</label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const Login = props => {
const { error, handleSubmit, pristine, reset, submitting } = props;
    return (<Container className="mt-5 d-flex justify-content-center">
      <Col md="4" className="p-4">
      <form onSubmit={handleSubmit(submit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <Button size="lg" color="success" type="submit" disabled={submitting}>LOGIN</Button>
      </div>
    </form>
  </Col>
  </Container>)

}
export default reduxForm({form: 'submitValidation'})(Login);
