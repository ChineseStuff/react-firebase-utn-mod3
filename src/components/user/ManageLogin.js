import React, { useState } from "react";
import UserLogin from "./UserLogin";
import * as constants from "./UserConstants";

const ManageLogin = ({ handleLoggin }) => {
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
    if (!isValidLoginForm()) return;

    let fields = {};
    fields.email = "";
    fields.password = "";
    setFields(fields);
    handleLoggin(true);
    alert("User Logged");
  }

  function isValidLoginForm() {
    const _errors = {};

    if (!fields.email) {
      _errors.email = constants.ERROR_LOGIN_EMPTY_EMAIL;
    }

    if (typeof fields.email !== "undefined") {
      let pattern = new RegExp(constants.EMAIL_PATTERN);
      if (!pattern.test(fields.email)) {
        _errors.email = constants.ERROR_EMAIL_PATTERN_NOTMATCH;
      }
    }

    if (!fields.password) {
      _errors.password = constants.ERROR_LOGIN_EMPTY_PASSWORD;
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <UserLogin errors={errors} onChange={handleChange} onSave={handleSave} />
  );
};

export default ManageLogin;
