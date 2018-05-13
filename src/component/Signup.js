import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Col,Container,Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Username cant be empty!'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less.'
  }
  if (!values.email) {
    errors.email = 'Email cant be empty!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }
  if(!values.password){
    errors.password='Password cant be empty!'
  }else if(values.password !== values.passwordConfirm){
     errors.passwordConfirm='Password dont match!'
  }
  return errors
}



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="login-wrapper">
    <label>{label}</label>
    <div>
      <Input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="text-danger">{error}</span>) ||
      (warning && <span className="text-danger">{warning}</span>))}
    </div>
  </div>
)

const Signup = (props) => {
  const { handleSubmit, pristine, reset, submitting} = props;
  return (<div>
    <ReactCSSTransitionGroup
      transitionName="fadein"
      transitionAppear={true}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
      transitionAppearTimeout={1000}>
    <Container className="d-flex justify-content-center mt-5 pb-5">
      <Col sm={6} className="from-warraper p-4">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center white-text">SIGN UP</h3>
        <Field name="username" type="text" component={renderField} label="Username"/>
        <Field name="email" type="email" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="Password"/>
        <Field name="passwordConfirm" type="password" component={renderField} label="Repeat Password"/>
        <div className="mt-3">
          <Button type="submit" color="warning" outline disabled={submitting}>SUBMIT</Button>
          <Button type="button" className="ml-3" disabled={pristine || submitting} onClick={reset}>RESET</Button>
        </div>
        <Link to="/login">
        <label className="mt-2 mb-0 logintosigntext">Already have an account ?</label>
      </Link><br></br>
      <label className="text-white ml-2" style={{fontSize:'12px'}}>
        Log in and start trading.</label>
      </form>
    </Col>
    </Container>
</ReactCSSTransitionGroup>
</div>
)
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate,                //validation function given to redux-form
})(Signup)
