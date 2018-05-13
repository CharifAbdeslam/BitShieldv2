import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Field, reduxForm } from 'redux-form';
import {submit} from '../actions/index';
import {Link} from 'react-router-dom';
import {Container,
        Button,
        Col,
        Input} from 'reactstrap';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="login-wrapper">
    <label>{label}</label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);
const Login = props => {
const {error,handleSubmit, submitting } = props;
    return (<ReactCSSTransitionGroup
      transitionName="fadein"
      transitionAppear={true}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
      transitionAppearTimeout={1000}>
      <Container className="mt-5 d-flex justify-content-center">
      <Col sm={6} className="p-4 from-warraper">
      <form onSubmit={handleSubmit(submit)}>
        <h3 className="text-center white-text">LOG IN</h3>
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
      {error && <span className="text-danger"><strong>{error}</strong></span>}
      <div className="mt-4">
        <Button  color="warning" outline type="submit" disabled={submitting}>LOG IN</Button>
        <Button  type="button" className="ml-2">RESET PASSWORD</Button>
      </div>
    <Link to="/signup">
    <label className="mt-2 mb-0 logintosigntext">Dont have an account ?</label>
  </Link>
  <label className="text-white pl-2" style={{fontSize:'12px'}}>
    Create one to start trading on a world class exchange platform.</label>
    </form>
  </Col>
  </Container>
</ReactCSSTransitionGroup>)

}
export default reduxForm({form: 'submitValidation'})(Login);
