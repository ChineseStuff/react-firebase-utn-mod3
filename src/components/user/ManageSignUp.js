import React, { useState } from "react";
import SignUpUser from "./SignUpUser";
import * as constants from "./UserConstants";
import { Redirect } from "react-router-dom";

const ManageSignUp = props => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (!isValidSignUp()) return;

    let fields = {};
    fields.name = "";
    fields.lastname = "";
    fields.email = "";
    fields.phone = "";
    fields.password = "";
    fields.repassword = "";
    setFields(fields);
    alert("Form submitted");
  }

  function isValidSignUp() {
    const _errors = {};

    if (!fields.name) {
      _errors.name = constants.ERROR_SIGNUP_EMPTY_NAME;
    }

    if (typeof fields.name !== "undefined") {
      if (!fields.name.match(constants.ALPHABET_PATTERN)) {
        _errors.name = constants.ERROR_SIGNUP_ALPHABET_NOTMATCH;
      }
    }

    if (!fields.lastname) {
      _errors.lastname = constants.ERROR_SIGNUP_EMPTY_LASTNAME;
    }

    if (typeof fields.lastname !== "undefined") {
      if (!fields.lastname.match(constants.ALPHABET_PATTERN)) {
        _errors.lastname = constants.ERROR_SIGNUP_ALPHABET_NOTMATCH;
      }
    }

    if (!fields.email) {
      _errors.email = constants.ERROR_SIGNUP_EMPTY_EMAIL;
    }

    if (typeof fields.email !== "undefined") {
      let pattern = new RegExp(constants.EMAIL_PATTERN);
      if (!pattern.test(fields.email)) {
        _errors.email = constants.ERROR_EMAIL_PATTERN_NOTMATCH;
      }
    }

    if (typeof fields.phone !== "undefined" && fields.phone !== "") {
      if (!fields.phone.match(constants.PHONE_PATTERN)) {
        _errors.phone = constants.ERROR_SIGNUP_PHONE_NOTMATCH;
      }
    }

    if (!fields.password) {
      _errors.password = constants.ERROR_SIGNUP_EMPTY_PASSWORD;
    }

    if (typeof fields.password !== "undefined") {
      let pattern = new RegExp(constants.PASSWORD_PATTERN);
      if (!pattern.test(fields.password)) {
        _errors.password = constants.ERROR_SIGNUP_PASSWORD_NOTSTRONG;
      }
    }

    if (!fields.repassword) {
      _errors.repassword = constants.ERROR_SIGNUP_EMPTY_REPASSWORD;
    }

    if (fields.repassword !== fields.password) {
      _errors.repassword = constants.ERROR_SIGNUP_PASSWORD_NOTMATCH;
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      {!props.isUserLogged ? (
        <SignUpUser
          errors={errors}
          onChange={handleChange}
          onSave={handleSave}
        />
      ) : (
        <>
          <Redirect exact to='/' />
          {alert(constants.ALERT_USER_LOGGED)}
        </>
      )}
    </>
  );
};

export default ManageSignUp;
