import React from "react";
import "./user.css";
import logo from "../../logo.svg";
import TextInput from "../common/TextInput";

const SignUpUser = props => {
  return (
    <div className='signup-wrapper'>
      <div className='signup-content'>
        <form className='signup-form' onSubmit={props.onSave}>
          <h2>Sign Up</h2>
          <TextInput
            name='name'
            type='text'
            icon='signature'
            placeholder='Your Name'
            labelStyle='label-style'
            error={props.errors.name}
            onChange={props.onChange}
          />
          <TextInput
            name='lastname'
            type='text'
            icon='signature'
            placeholder='Your Lastname'
            labelStyle='label-style'
            error={props.errors.lastname}
            onChange={props.onChange}
          />
          <TextInput
            name='phone'
            type='text'
            icon='phone-alt'
            placeholder='Your Phone'
            labelStyle='phone-style'
            error={props.errors.phone}
            onChange={props.onChange}
          />
          <TextInput
            name='email'
            type='text'
            icon='envelope'
            placeholder='Your Email'
            labelStyle='label-style'
            error={props.errors.email}
            onChange={props.onChange}
          />
          <TextInput
            name='password'
            type='password'
            icon='unlock-alt'
            placeholder='Your Password'
            labelStyle='label-style'
            error={props.errors.password}
            onChange={props.onChange}
          />
          <TextInput
            name='repassword'
            type='password'
            icon='unlock-alt'
            placeholder='Repeat your Password'
            labelStyle='label-style'
            error={props.errors.repassword}
            onChange={props.onChange}
          />
          <button type='submit' className='button submit'>
            Sign Up
          </button>
        </form>
      </div>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
};

export default SignUpUser;
