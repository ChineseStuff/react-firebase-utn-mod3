import React from "react";
import "./user.css";
import logo from "../../logo.svg";
import TextInput from "../common/TextInput";

const UserLogin = props => {
  return (
    <div className='signup-wrapper'>
      <div className='signup-content'>
        <form className='signup-form' onSubmit={props.onSave}>
          <h2>Login</h2>
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
          <button type='submit' className='button submit'>
            Login
          </button>
        </form>
      </div>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
};

export default UserLogin;
